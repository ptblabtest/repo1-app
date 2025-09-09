import prisma from "@shared/lib/prisma";
import { prepareForView } from "@shared/utils/query/prepareForView";
import { z } from "zod";

const reportCategorySchema = z.object({
  name: z.string(),
  interval: z.string().optional(),
  parentId: z.string().optional(),
});

const CATEGORY_SELECT = {
  id: true,
  name: true,
  interval: true,
  parentId: true,
  parent: {
    select: {
      id: true,
      name: true,
      interval: true,
    },
  },
  createdAt: true,
  updatedAt: true,
};

const transformCategory = (category: any) => {
  const prepared = prepareForView(category);
  return {
    ...prepared,
    hasParent: !!prepared.parentId,
  };
};

export const reportCategoryService = {
  create: async (data: any, user: any) => {

    if (data.parentId) {
      const parentLevel = await getCategoryLevel(data.parentId);
      if (parentLevel >= 3) {
        throw new Error("Maximum 3 levels allowed");
      }
    }

    const processedData = {
      ...data,
    };

    const category = await prisma.reportCategory.create({
      data: processedData,
    });

    // Create permissions only for leaf categories
    const hasChildren = await prisma.reportCategory.count({
      where: { parentId: category.id },
    });

    if (hasChildren === 0) {
      await createCategoryPermissions(category.id, category.name);
    }

    // If this category has a parent, check if parent should lose permissions
    if (category.parentId) {
      const siblingCount = await prisma.reportCategory.count({
        where: { parentId: category.parentId },
      });

      if (siblingCount === 1) {
        // This is the first child
        await prisma.permission.deleteMany({
          where: {
            resource: `report:category:${category.parentId}`,
          },
        });
      }
    }

    return category;
  },
  update: async (id: string, data: any, user: any) => {
    const validatedData = await reportCategorySchema.partial().parseAsync(data);

    const oldCategory = await prisma.reportCategory.findUnique({
      where: { id },
      select: { parentId: true },
    });

    if (validatedData.parentId) {
      const parentLevel = await getCategoryLevel(validatedData.parentId);
      if (parentLevel >= 3) {
        throw new Error("Maximum 3 levels allowed");
      }
    }

    const processedData = {
      ...validatedData,
    };

    const category = await prisma.reportCategory.update({
      where: { id },
      data: processedData,
    });

    // Handle permission changes if parent changed
    if (
      validatedData.parentId !== undefined &&
      oldCategory?.parentId !== validatedData.parentId
    ) {
      // Check if old parent should get permissions back
      if (oldCategory?.parentId) {
        const oldParentChildCount = await prisma.reportCategory.count({
          where: { parentId: oldCategory.parentId },
        });

        if (oldParentChildCount === 0) {
          const oldParent = await prisma.reportCategory.findUnique({
            where: { id: oldCategory.parentId },
            select: { name: true },
          });
          if (oldParent) {
            await createCategoryPermissions(
              oldCategory.parentId,
              oldParent.name
            );
          }
        }
      }

      // Check if new parent should lose permissions
      if (validatedData.parentId) {
        const newParentChildCount = await prisma.reportCategory.count({
          where: { parentId: validatedData.parentId },
        });

        if (newParentChildCount === 1) {
          await prisma.permission.deleteMany({
            where: {
              resource: `report:category:${validatedData.parentId}`,
            },
          });
        }
      }
    }

    return category;
  },
  findMany: async (queryParams?: any) => {
    const categories = await prisma.reportCategory.findMany({
      ...queryParams,
      select: CATEGORY_SELECT,
    });

    return categories.map(transformCategory);
  },
  findUnique: async (id: string) => {
    const category = await prisma.reportCategory.findUnique({
      where: { id },
      select: CATEGORY_SELECT,
    });

    if (!category) return null;

    return transformCategory(category);
  },
  delete: async (id: string) => {
    // Check if there are any reports using this category
    const reportCount = await prisma.report.count({
      where: { categoryId: id },
    });

    if (reportCount > 0) {
      throw new Error(
        `Cannot delete category. There are ${reportCount} reports using this category.`
      );
    }

    // Check if there are child categories
    const childCount = await prisma.reportCategory.count({
      where: { parentId: id },
    });

    if (childCount > 0) {
      throw new Error(
        `Cannot delete category. There are ${childCount} child categories.`
      );
    }

    // Get the category details before deletion
    const categoryToDelete = await prisma.reportCategory.findUnique({
      where: { id },
      select: { parentId: true },
    });

    // Delete permissions for this category
    await prisma.permission.deleteMany({
      where: {
        resource: `report:category:${id}`,
      },
    });

    const category = await prisma.reportCategory.delete({
      where: { id },
    });

    // If deleted category had a parent and parent has no other children, create permissions for parent
    if (categoryToDelete?.parentId) {
      const parentChildCount = await prisma.reportCategory.count({
        where: { parentId: categoryToDelete.parentId },
      });

      if (parentChildCount === 0) {
        const parent = await prisma.reportCategory.findUnique({
          where: { id: categoryToDelete.parentId },
          select: { name: true },
        });
        if (parent) {
          await createCategoryPermissions(
            categoryToDelete.parentId,
            parent.name
          );
        }
      }
    }

    return category;
  },
  upsert: async (body: any, user: any) => {
    const items = body.data;
    const results = [];
    const tempIdMapping: Record<string, string> = {};

    for (let index = 0; index < items.length; index++) {
      const item = { ...items[index] };

      const tempId = item.tempId;
      if (tempId) {
        delete item.tempId;
      }

      if (item.parentId && tempIdMapping[item.parentId]) {
        item.parentId = tempIdMapping[item.parentId];
      }

      let result;
      if (item.id) {
        result = await reportCategoryService.update(item.id, item, user);
      } else {
        result = await reportCategoryService.create(item, user);

        if (tempId && result.id) {
          tempIdMapping[tempId] = result.id;
        }
      }

      results.push(result);
    }

    return results;
  },
  syncCategoryPermissions: async () => {
    // Get all categories with child count
    const categories = await prisma.reportCategory.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // Get leaf categories (categories without children)
    const leafCategories = [];
    for (const category of categories) {
      const childCount = await prisma.reportCategory.count({
        where: { parentId: category.id },
      });

      if (childCount === 0) {
        leafCategories.push(category);
      }
    }

    // Get all existing category permissions
    const existingPermissions = await prisma.permission.findMany({
      where: {
        resource: { startsWith: "report:category:" },
      },
    });

    // Create a map of existing permissions by resource
    const permissionMap = new Map();
    existingPermissions.forEach((p: any) => {
      const key = `${p.resource}:${p.action}`;
      permissionMap.set(key, p);
    });

    // Track which permissions should exist
    const validPermissionKeys = new Set();
    const actions = ["view", "create", "update", "delete"];

    // Create missing permissions for leaf categories only
    for (const category of leafCategories) {
      for (const action of actions) {
        const resource = `report:category:${category.id}`;
        const key = `${resource}:${action}`;
        validPermissionKeys.add(key);

        if (!permissionMap.has(key)) {
          await prisma.permission.create({
            data: {
              name: `Report ${category.name} - ${action}`,
              resource: resource,
              action: action,
              description: `Permission to ${action} reports for category ${category.name}`,
            },
          });
        }
      }
    }

    // Delete all permissions that shouldn't exist
    const leafCategoryIds = new Set(leafCategories.map((c: any) => c.id));

    for (const permission of existingPermissions) {
      const categoryId = permission.resource.replace("report:category:", "");
      const key = `${permission.resource}:${permission.action}`;

      if (!leafCategoryIds.has(categoryId) || !validPermissionKeys.has(key)) {
        await prisma.permission.delete({
          where: { id: permission.id },
        });
      }
    }
  },
};

const getCategoryLevel = async (categoryId: string): Promise<number> => {
  const category = await prisma.reportCategory.findUnique({
    where: { id: categoryId },
    select: {
      parentId: true,
      parent: {
        select: { parentId: true },
      },
    },
  });

  if (!category?.parentId) return 1;
  if (!category.parent?.parentId) return 2;
  return 3;
};

const createCategoryPermissions = async (
  categoryId: string,
  categoryName: string
) => {
  const actions = ["view", "create", "update", "delete"];
  const permissions = [];

  for (const action of actions) {
    const permission = await prisma.permission.create({
      data: {
        name: `Report ${categoryName} - ${action}`,
        resource: `report:category:${categoryId}`,
        action: action,
        description: `Permission to ${action} reports for category ${categoryName}`,
      },
    });
    permissions.push(permission);
  }

  return permissions;
};
