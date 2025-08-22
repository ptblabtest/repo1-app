import { serviceFactory } from "@shared/shared/utils/serviceFactory";
import prisma from "@shared/lib/prisma";
import fs from "fs";
import path from "path";
import { permissionService } from "@shared/modules/_permissions/Permission/PermissionService";

// ReportCategory Service
const reportCategoryService = serviceFactory("reportCategory", {
  operations: [
    "create",
    "update",
    "findMany",
    "findUnique",
    "delete",
    "upsert",
  ],
  queryOptions: {
    select: {
      id: true,
      name: true,
      code: true,
      parentId: true,
      parent: {
        select: {
          id: true,
          name: true,
          code: true,
        },
      },
      createdAt: true,
      updatedAt: true,
      createdById: true,
      updatedById: true,
    },
  },
  beforeCreate: async (data: any, user: any, context: any) => {
    // Validate max depth of 3 levels
    if (data.parentId) {
      const depth = await getCategoryDepth(data.parentId);
      if (depth >= 2) {
        throw new Error("Category hierarchy cannot exceed 3 levels");
      }
    }
    // Store user in context for afterCreate
    context.user = user;
    return data;
  },
  afterCreate: async (record: any, context: any) => {
    // Create permissions using permissionService
    const actions = ["create", "read", "update", "delete"];
    const resource = `report.${record.code.toLowerCase()}`;

    for (const action of actions) {
      try {
        await permissionService.create(
          {
            resource: resource,
            action: action,
            description: `${action.charAt(0).toUpperCase() + action.slice(1)} ${record.name}`,
          },
          context.user
        );
      } catch (err: any) {
        // Skip if permission already exists
        if (err.message?.includes("Unique constraint")) {
          continue;
        }
        console.error(
          `Failed to create permission ${resource}.${action}:`,
          err.message
        );
      }
    }
  },
  beforeUpdate: async (data: any, id: string, user: any) => {
    // Validate max depth when changing parent
    if (data.parentId) {
      const depth = await getCategoryDepth(data.parentId);
      if (depth >= 2) {
        throw new Error("Category hierarchy cannot exceed 3 levels");
      }

      if (data.parentId === id) {
        throw new Error("Category cannot be its own parent");
      }
    }
    return data;
  },
  afterUpdate: async (record: any) => {
    // Update permission descriptions if category name changed
    if (record.name) {
      const resource = `report.${record.code.toLowerCase()}`;
      const permissions = await prisma.permission.findMany({
        where: { resource },
      });

      for (const perm of permissions) {
        await permissionService.update(
          {
            description: `${perm.action.charAt(0).toUpperCase() + perm.action.slice(1)} ${record.name}`,
          },
          perm.id,
          { id: record.updatedById }
        ); // Pass user context
      }
    }
  },
  afterDelete: async (record: any) => {
    // Delete related permissions using direct prisma (since permissionService might not have deleteMany)
    const resource = `report.${record.code.toLowerCase()}`;
    const permissions = await prisma.permission.findMany({
      where: { resource },
    });

    for (const perm of permissions) {
      try {
        await permissionService.delete(perm.id);
      } catch (err) {
        console.error(`Failed to delete permission ${perm.name}:`, err);
      }
    }
  },
});

// Override the upsert to handle parentCode reference
reportCategoryService.upsert = async (body: any, user: any) => {
  const items = body.data;
  const results = [];
  const codeToIdMap: any = {}; // Map code to real id

  for (const item of items) {
    const { parentCode, ...itemData } = item;

    // Replace parentCode with real parentId
    if (parentCode && codeToIdMap[parentCode]) {
      itemData.parentId = codeToIdMap[parentCode];
    }

    let result;
    if (itemData.id) {
      result = await reportCategoryService.update(itemData, itemData.id, user);
    } else {
      result = await reportCategoryService.create(itemData, user);
    }

    // Store mapping of code to id
    codeToIdMap[result.code] = result.id;

    results.push(result);
  }

  return results;
};

// Report Service
const reportService = serviceFactory("report", {
  operations: ["create", "update", "findMany", "findUnique", "delete"],
  queryOptions: {
    select: {
      id: true,
      categoryId: true,
      category: {
        select: {
          id: true,
          name: true,
          code: true,
        },
      },
      periodYear: true,
      periodMonth: true,
      periodDate: true,
      version: true,
      organizationId: true,
      organization: {
        select: {
          id: true,
          name: true,
          code: true,
        },
      },
      files: {
        select: {
          id: true,
          filename: true,
          path: true,
          mimeType: true,
          size: true,
          createdAt: true,
        },
      },
      notes: {
        select: {
          id: true,
          description: true,
          createdAt: true,
          createdById: true,
        },
        orderBy: {
          createdAt: "desc" as any,
        },
      },
      stages: {
        select: {
          id: true,
          comment: true,
          stageTypeId: true,
          type: {
            select: {
              id: true,
              value: true,
              label: true,
              order: true,
            },
          },
          createdAt: true,
          createdById: true,
        },
        orderBy: {
          createdAt: "desc" as any,
        },
      },
      createdAt: true,
      updatedAt: true,
      createdById: true,
      updatedById: true,
    },
  },
  beforeCreate: async (data: any, user: any, context: any) => {
    // Check for duplicate report in same period
    const existingReport = await prisma.report.findFirst({
      where: {
        categoryId: data.categoryId,
        periodYear: data.periodYear,
        periodMonth: data.periodMonth,
        periodDate: data.periodDate || null,
        organizationId: data.organizationId,
      },
    });

    if (existingReport) {
      throw new Error("Report already exists for this period");
    }

    return data;
  },
  beforeUpdate: async (data: any, id: string, user: any) => {
    // Increment version on update
    const currentReport = await prisma.report.findUnique({
      where: { id },
      select: { version: true },
    });

    if (currentReport) {
      data.version = currentReport.version + 1;
    }

    return data;
  },
  afterDelete: async (deletedReport: any) => {
    // Find all files associated with this report
    const files = await prisma.file.findMany({
      where: { reportId: deletedReport.id },
    });

    // Delete physical files from filesystem
    for (const file of files) {
      const filePath = path.join(process.cwd(), file.path);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
          console.log(`Deleted file: ${filePath}`);
        } catch (error) {
          console.error(`Failed to delete file: ${filePath}`, error);
        }
      }
    }

    // Delete file records from database
    if (files.length > 0) {
      await prisma.file.deleteMany({
        where: { reportId: deletedReport.id },
      });
      console.log(
        `Deleted ${files.length} file records for report ${deletedReport.id}`
      );
    }
  },
});

// Helper function for category depth validation
async function getCategoryDepth(
  categoryId: string,
  depth = 0
): Promise<number> {
  if (depth >= 3) return depth;

  const category = await prisma.reportCategory.findUnique({
    where: { id: categoryId },
    select: { parentId: true },
  });

  if (!category?.parentId) return depth;
  return getCategoryDepth(category.parentId, depth + 1);
}

export const ReportService = {
  report: reportService,
  category: reportCategoryService,
};
