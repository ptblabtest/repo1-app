import prisma from "@shared/lib/prisma";
import { serviceFactory } from "@shared/shared/utils/serviceFactory";

const service = {
  model: "budget",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      description: true,
      amount: true,
      approvedDate: true,
      revision: true,
      assigneeId: true,
      createdAt: true,
      updatedAt: true,
      items: {
        select: {
          id: true,
          categoryId: true,
          description: true,
          quantity: true,
          timeUnit: true,
          unitPrice: true,
          amount: true,
          createdAt: true,
          updatedAt: true,
          category: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      stages: {
        select: {
          type: true,
          createdBy: true,
        },
      },
      assignee: {
        select: {
          name: true,
        },
      },
      createdBy: {
        select: {
          name: true,
        },
      },
      updatedBy: {
        select: {
          name: true,
        },
      },
    },
  },
  transformData: (result: any) => {
    result.itemList = result.items.map((item: any) => {
      item.categoryName = item.category?.name;
      delete item.category;
      return item;
    });

    delete result.items;
    return result;
  },
  beforeCreate: async (data: any, user: any, context: any = {}) => {
    if (data.itemList && Array.isArray(data.itemList)) {
      const validItems = data.itemList.filter(
        (item: any) => item.amount && item.amount > 0
      );

      data.items = {
        create: validItems.map((item: any) => ({
          categoryId: item.categoryId,
          description: item.description,
          quantity: item.quantity,
          timeUnit: item.timeUnit,
          unitPrice: item.unitPrice,
          amount: item.amount,
        })),
      };
      delete data.itemList;
    }
    return data;
  },
  beforeUpdate: async (data: any, id: string, user: any) => {
    if (data.itemList && Array.isArray(data.itemList)) {
      const validItems = data.itemList.filter(
        (item: any) => item.amount && item.amount > 0
      );

      data.items = {
        deleteMany: {}, // Delete all existing items first
        create: validItems.map((item: any) => ({
          categoryId: item.categoryId,
          description: item.description,
          quantity: item.quantity,
          timeUnit: item.timeUnit,
          unitPrice: item.unitPrice,
          amount: item.amount,
        })),
      };
      delete data.itemList;
    }
    return data;
  },
  afterUpdate: async (record: any) => {
    // Find the Review stage type for budget model
    const reviewStageType = await prisma.stageType.findFirst({
      where: {
        model: "budget",
        value: "Review",
      },
    });

    if (reviewStageType) {
      // Create a new stage entry
      await prisma.stage.create({
        data: {
          budgetId: record.id,
          stageTypeId: reviewStageType.id,
          comment: "Budget updated - pending review",
          createdById: record.updatedById,
        },
      });
    }
  },
};

export const budgetService = {
  ...serviceFactory(service.model, service),
};
