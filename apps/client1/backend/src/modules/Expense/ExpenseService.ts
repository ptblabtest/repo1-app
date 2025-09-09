import prisma from "@shared/lib/prisma";
import { serviceFactory } from "@shared/utils/serviceFactory";

const service = {
  model: "expense",
  operations: ["create", "update", "findMany", "findUnique", "upsert"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      categoryId: true,
      description: true,
      amount: true,
      date: true,
      reviewDate: true,
      reviewedById: true,
      createdAt: true,
      updatedAt: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
      reviewedBy: {
        select: {
          id: true,
          name: true,
        },
      },
      createdBy: {
        select: {
          id: true,
          name: true,
        },
      },
      updatedBy: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  },
  transformData: (result: any) => {
    result.categoryName = result.category?.name;

    delete result.category;

    return result;
  },
  beforeCreate: async (data: any, user: any, context: any) => {
    if (data.fundId) {
      const fund = await prisma.fund.findUnique({
        where: { id: data.fundId },
        select: { taskId: true },
      });

      if (fund?.taskId) {
        data.taskId = fund.taskId;
      }
    }

    return data;
  },
  beforeUpdate: async (data: any, id: string, user: any) => {
    if (data.fundId) {
      const fund = await prisma.fund.findUnique({
        where: { id: data.fundId },
        select: { taskId: true },
      });

      if (fund?.taskId) {
        data.taskId = fund.taskId;
      }
    }

    return data;
  },
};

export const expenseService = {
  ...serviceFactory(service.model, service),
  review: async (body: any, user: any) => {
    const { ids, reviewDate } = body;

    if (!ids || ids.length === 0 || !reviewDate) {
      throw new Error("Expense IDs and review date are required");
    }

    const result = await prisma.expense.updateMany({
      where: {
        id: {
          in: ids,
        },
      },
      data: {
        reviewDate: new Date(reviewDate),
        reviewedById: user.id,
      },
    });

    return {
      success: true,
      count: result.count,
      message: `${result.count} expense(s) reviewed successfully`,
    };
  },
  assignTask: async (user: any) => {
    // Get all expenses with their fund's taskId
    const expenses = await prisma.expense.findMany({
      select: {
        id: true,
        fund: {
          select: {
            taskId: true,
          },
        },
      },
      where: {
        fund: {
          taskId: {
            not: null,
          },
        },
      },
    });

    // Update each expense with its fund's taskId
    const updates = expenses.map((expense: any) =>
      prisma.expense.update({
        where: { id: expense.id },
        data: {
          taskId: expense.fund.taskId,
          updatedById: user.id,
        },
      })
    );

    await Promise.all(updates);

    return {
      success: true,
      count: expenses.length,
      message: `${expenses.length} expense(s) assigned to task from their funds`,
    };
  },
};
