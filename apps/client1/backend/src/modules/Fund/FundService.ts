import { calculateBudgetComparison } from "@shared/shared/utils/compareBudgetExpense";
import { serviceFactory } from "@shared/shared/utils/serviceFactory";

const service = {
  model: "fund",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      description: true,
      amount: true,
      requestDate: true,
      approvedDate: true,
      closedDate: true,
      expiredDate: true,
      voidDate: true,
      plannedPaymentDate: true,
      type: true,
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
          id: true,
          type: true,
          comment: true,
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
      payments: {
        select: {
          id: true,
          amount: true,
          type: true,
        },
      },
      expenses: {
        select: {
          id: true,
          amount: true,
        },
      },
    },
  },
  transformData: async (result: any) => {
    result.budgetSummary = await calculateBudgetComparison(result.id, "fundId");

    result.paidAmount =
      result.payments?.reduce((sum: number, payment: any) => {
        if (payment.type === "PAID") {
          return sum + Number(payment.amount || 0);
        }
        return sum;
      }, 0) || 0;

    result.receivedAmount =
      result.payments?.reduce((sum: number, payment: any) => {
        if (payment.type === "RECEIVED") {
          return sum + Number(payment.amount || 0);
        }
        return sum;
      }, 0) || 0;

    result.expenseAmount =
      result.expenses?.reduce(
        (sum: number, expense: any) => sum + Number(expense.amount || 0),
        0
      ) || 0;

    result.paymentBalanceAmount = result.paidAmount - result.expenseAmount - result.receivedAmount;

    result.expenseBalanceAmount = result.amount - result.receivedAmount;

    // Existing itemList transformation
    result.itemList = result.items.map((item: any) => {
      item.categoryName = item.category?.name;
      delete item.category;
      return item;
    });

    // Clean up original arrays if you don't want to return them
    delete result.items;
    delete result.payments;
    delete result.expenses;

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
};

export const fundService = {
  ...serviceFactory(service.model, service),
};
