import { serviceFactory } from "@shared/utils/serviceFactory";
import { calculateBudgetComparison } from "@shared/utils/query/compareBudgetExpense";
import prisma from "@shared/lib/prisma";
import { z } from "zod";
import { prepareForView } from "@shared/utils/query/prepareForView";

const budgetService = {
  ...serviceFactory("budget", {
    operations: ["create", "update", "findMany", "findUnique"],
    schema: z.object({
      regNumber: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      amount: z.coerce.number().optional().nullable(),
      approvedDate: z.coerce.date().optional().nullable(),
      revision: z.coerce.number().optional().nullable(),
      assigneeId: z.string().optional().nullable(),
      createdById: z.string().optional().nullable(),
      updatedById: z.string().optional().nullable(),
      projectId: z.string().optional().nullable(),
      items: z.any().optional().nullable(),
      stages: z.any().optional().nullable(),
    }),
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
        assignee: {
          select: {
            username: true,
          },
        },
        createdBy: {
          select: {
            username: true,
          },
        },
        updatedBy: {
          select: {
            username: true,
          },
        },
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
        project: {
          select: {
            id: true,
            regNumber: true,
          },
        },
        stages: {
          select: {
            id: true,
            type: true,
            comment: true,
            createdAt: true,
            createdBy: {
              select: {
                username: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
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
        let validItems = data.itemList.filter(
          (item: any) => item.amount && item.amount > 0
        );

        // Calculate parent amounts based on children
        validItems = await calculateParentAmount(validItems);

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

        data.amount = validItems.reduce(
          (sum, item) => sum + Number(item.amount),
          0
        );

        delete data.itemList;
      }
      return data;
    },

    beforeUpdate: async (data: any, id: string, user: any) => {
      if (data.itemList && Array.isArray(data.itemList)) {
        let validItems = data.itemList.filter(
          (item: any) => item.amount && item.amount > 0
        );

        // Calculate parent amounts based on children
        validItems = await calculateParentAmount(validItems);

        data.items = {
          deleteMany: {},
          create: validItems.map((item: any) => ({
            categoryId: item.categoryId,
            description: item.description,
            quantity: item.quantity,
            timeUnit: item.timeUnit,
            unitPrice: item.unitPrice,
            amount: item.amount,
          })),
        };

        data.amount = validItems.reduce(
          (sum, item) => sum + Number(item.amount),
          0
        );

        delete data.itemList;
      }
      return data;
    },
    afterUpdate: async (record: any, user: any) => {
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
            createdById: user.id,
          },
        });
      }
    },
  }),
  getForm: async (id?: string) => {
    // Fetch all categories (both parents and children)
    const allCategories = await prisma.costType.findMany({
      orderBy: { order: "asc" },
      select: {
        id: true,
        name: true,
        order: true,
        parentId: true,
        children: {
          select: {
            id: true,
            order: true,
          },
          orderBy: { order: "asc" },
        },
      },
    });

    // Separate parents and children
    const parentCategories = allCategories.filter((cat) => !cat.parentId);
    const childCategories = allCategories.filter((cat) => cat.parentId);

    // Create ordered list with parents before their children
    const orderedCategories: any[] = [];

    parentCategories.forEach((parent) => {
      // Add parent
      orderedCategories.push({
        id: parent.id,
        name: parent.name,
        order: parent.order,
        isParent: true,
      });

      // Add its children
      const children = childCategories
        .filter((child) => child.parentId === parent.id)
        .sort((a, b) => (a.order || 0) - (b.order || 0));

      children.forEach((child) => {
        orderedCategories.push({
          id: child.id,
          name: child.name,
          order: child.order,
          isParent: false,
        });
      });
    });

    if (!id) {
      // Create mode - return empty structure
      return {
        itemList: orderedCategories.map((category: any) => ({
          categoryId: category.id,
          categoryName: category.name,
          description: "",
          quantity: 0,
          timeUnit: 1,
          unitPrice: 0,
          amount: 0,
          isParent: category.isParent,
        })),
      };
    }

    // Edit mode - fetch existing budget
    const budget = await budgetService.findUnique(id);

    if (!budget) return null;

    // Create a map of existing items
    const existingItemsMap = new Map(
      (budget.itemList || []).map((item: any) => [item.categoryId, item])
    );

    // Merge existing items with all categories
    const mergedItemList = orderedCategories.map((category: any) => {
      const existingItem = existingItemsMap.get(category.id);
      return (
        existingItem || {
          categoryId: category.id,
          categoryName: category.name,
          description: "",
          quantity: 0,
          timeUnit: 1,
          unitPrice: 0,
          amount: 0,
          isParent: category.isParent,
        }
      );
    });

    return {
      ...budget,
      itemList: mergedItemList,
    };
  },
};

const costTypeService = {
  ...serviceFactory("costType", {
    operations: ["create", "update", "findUnique", "upsert"],
    schema: z.object({
      order: z.number().optional().nullable(),
      name: z.string().min(1, "Name is required"),
      parentId: z.string().optional().nullable(),
      createdById: z.string().optional().nullable(),
      updatedById: z.string().optional().nullable(),
    }),
    queryOptions: {
      select: {
        id: true,
        order: true,
        name: true,
        parentId: true,
        parent: {
          select: {
            id: true,
            name: true,
          },
        },
        children: {
          select: {
            id: true,
            name: true,
          },
        },
        createdBy: {
          select: {
            username: true,
          },
        },
        updatedBy: {
          select: {
            username: true,
          },
        },
      },
      orderBy: {
        order: "asc",
      },
    },
    transformData: (result: any) => {
      result.parentId = result.parentId || null;
      result.parentName = result.parent?.name;
      result.level = result.parentId ? "Child" : "Parent";

      delete result.parent;

      result.childrenCount = result.children?.length || 0;

      delete result.children;

      return result;
    },
  }),
 findMany: async function (queryParams?: any) {
   const records = await prisma.costType.findMany({
     ...queryParams,
     select: {
       id: true,
       order: true,
       name: true,
       parentId: true,
       parent: {
         select: {
           id: true,
           name: true,
         },
       },
       children: {
         select: {
           id: true,
           name: true,
         },
       },
       createdBy: {
         select: {
           username: true,
         },
       },
       updatedBy: {
         select: {
           username: true,
         },
       },
     },
     orderBy: {
       order: "asc",
     },
   });

   // Transform data
   const transformed = records.map((record: any) => {
     const result = prepareForView(record);
     result.parentId = result.parentId || null;
     result.parentName = result.parent?.name;
     result.isParent = !result.parentId;
     delete result.parent;
     result.childrenCount = result.children?.length || 0;
     delete result.children;
     return result;
   });

   // Separate parents and children
   const parents = transformed.filter((r: any) => r.isParent).sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
   const children = transformed.filter((r: any) => !r.isParent);
   
   // Build result: each parent followed by its children
   const result: any[] = [];
   parents.forEach((parent: any) => {
     result.push(parent);
     const parentChildren = children
       .filter((c: any) => c.parentId === parent.id)
       .sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
     result.push(...parentChildren);
   });
   
   return result;
 },
};


const fundService = {
  ...serviceFactory("fund", {
    operations: ["create", "update", "findMany", "findUnique"],
    schema: z.object({
      regNumber: z.string().optional().nullable(),
      description: z.string().min(1, "Description is required"),
      amount: z.coerce.number().optional().nullable(),
      requestDate: z.coerce.date().optional().nullable(),
      approvedDate: z.coerce.date().optional().nullable(),
      closedDate: z.coerce.date().optional().nullable(),
      expiredDate: z.coerce.date().optional().nullable(),
      voidDate: z.coerce.date().optional().nullable(),
      plannedPaymentDate: z.coerce.date().optional().nullable(),
      type: z.string().optional().nullable(),
      revision: z.coerce.number().optional().nullable(),
      assigneeId: z.string().optional().nullable(),
      createdById: z.string().optional().nullable(),
      updatedById: z.string().optional().nullable(),
      taskId: z.string().optional().nullable(),
      items: z.any().optional().nullable(),
      stages: z.any().optional().nullable(),
    }),
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

        assignee: {
          select: {
            username: true,
          },
        },
        createdBy: {
          select: {
            username: true,
          },
        },
        updatedBy: {
          select: {
            username: true,
          },
        },
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
        expenses: {
          select: {
            id: true,
            amount: true,
          },
        },
        task: {
          select: {
            id: true,
            title: true,
          },
        },
        stages: {
          select: {
            id: true,
            type: true,
            comment: true,
            createdAt: true,
            createdBy: {
              select: {
                username: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    },
    transformData: async (result: any) => {
      result.expenseAmount =
        result.expenses?.reduce(
          (sum: number, expense: any) => sum + Number(expense.amount || 0),
          0
        ) || 0;

      result.expenseBalanceAmount = result.amount - result.receivedAmount;

      // Existing itemList transformation
      result.itemList = result.items.map((item: any) => {
        item.categoryName = item.category?.name;
        delete item.category;
        return item;
      });

      // Clean up original arrays if you don't want to return them
      delete result.items;
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
  }),
  getForm: async (id?: string, taskId?: string) => {
    // Fetch all categories (both parents and children)
    const allCategories = await prisma.costType.findMany({
      orderBy: { order: "asc" },
      select: {
        id: true,
        name: true,
        order: true,
        parentId: true,
        children: {
          select: {
            id: true,
            order: true,
          },
          orderBy: { order: "asc" },
        },
      },
    });

    // Separate parents and children
    const parentCategories = allCategories.filter((cat) => !cat.parentId);
    const childCategories = allCategories.filter((cat) => cat.parentId);

    // Create ordered list with parents before their children
    const orderedCategories: any[] = [];

    parentCategories.forEach((parent) => {
      // Add parent
      orderedCategories.push({
        id: parent.id,
        name: parent.name,
        order: parent.order,
        isParent: true,
      });

      // Add its children
      const children = childCategories
        .filter((child) => child.parentId === parent.id)
        .sort((a, b) => (a.order || 0) - (b.order || 0));

      children.forEach((child) => {
        orderedCategories.push({
          id: child.id,
          name: child.name,
          order: child.order,
          isParent: false,
        });
      });
    });

    // If taskId is provided, get budget items from project
    let budgetItemsMap = new Map();
    let additionalData: any = {};

    if (taskId && !id) {
      // Only for create mode
      const task = await prisma.task.findUnique({
        where: { id: taskId },
        select: {
          id: true,
          milestone: {
            select: {
              projectId: true,
              project: {
                select: {
                  budgets: {
                    select: {
                      items: {
                        select: {
                          categoryId: true,
                          description: true,
                          quantity: true,
                          timeUnit: true,
                          unitPrice: true,
                          amount: true,
                        },
                      },
                    },
                    orderBy: {
                      revision: "desc",
                    },
                    take: 1, // Get latest budget
                  },
                },
              },
            },
          },
        },
      });

      if (task?.milestone?.project?.budgets?.[0]) {
        const latestBudget = task.milestone.project.budgets[0];
        budgetItemsMap = new Map(
          latestBudget.items.map((item) => [item.categoryId, item])
        );
        additionalData.taskId = taskId;
      }
    }

    if (!id) {
      // Create mode - return structure with budget values if available
      return {
        ...additionalData,
        itemList: orderedCategories.map((category: any) => {
          const budgetItem = budgetItemsMap.get(category.id);
          return {
            categoryId: category.id,
            categoryName: category.name,
            description: budgetItem?.description || "",
            quantity: budgetItem?.quantity || 0,
            timeUnit: budgetItem?.timeUnit || 1,
            unitPrice: budgetItem?.unitPrice || 0,
            amount: budgetItem?.amount || 0,
            isParent: category.isParent,
          };
        }),
      };
    }

    // Edit mode - fetch existing fund
    const fund = await fundService.findUnique(id);

    if (!fund) return null;

    // Create a map of existing items
    const existingItemsMap = new Map(
      (fund.itemList || []).map((item: any) => [item.categoryId, item])
    );

    // Merge existing items with all categories
    const mergedItemList = orderedCategories.map((category: any) => {
      const existingItem = existingItemsMap.get(category.id);
      return (
        existingItem || {
          categoryId: category.id,
          categoryName: category.name,
          description: "",
          quantity: 0,
          timeUnit: 1,
          unitPrice: 0,
          amount: 0,
          isParent: category.isParent,
        }
      );
    });

    return {
      ...fund,
      itemList: mergedItemList,
    };
  },
  getFundComparison: async (fundId: string, showAll: boolean = true) => {
    // Get fund items as budget for this specific fund
    const fundItems = await prisma.fundItem.findMany({
      where: {
        fundId: fundId,
      },
      select: {
        categoryId: true,
        amount: true,
      },
    });

    // Get expenses for this fund
    const expenses = await prisma.expense.findMany({
      where: {
        fundId: fundId,
      },
      select: {
        categoryId: true,
        amount: true,
      },
    });

    // Return the comparison directly
    return await calculateBudgetComparison(fundItems, expenses, showAll);
  },
};

const expenseService = {
  ...serviceFactory("expense", {
    operations: ["create", "update", "findMany", "findUnique", "upsert"],
    schema: z.object({
      regNumber: z.string().optional().nullable(),
      categoryId: z.string().min(1, "Category is required"),
      description: z.string().optional().nullable(),
      amount: z.coerce.number().min(0.01, "Amount must be greater than 0"),
      date: z.coerce.date().optional().nullable(),
      createdById: z.string().optional().nullable(),
      updatedById: z.string().optional().nullable(),
      fundId: z.string().optional().nullable(),
      taskId: z.string().optional().nullable(),
      projectId: z.string().optional().nullable(),
    }),
    queryOptions: {
      select: {
        id: true,
        regNumber: true,
        categoryId: true,
        description: true,
        amount: true,
        date: true,
        createdAt: true,
        updatedAt: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        createdBy: {
          select: {
            id: true,
            username: true,
          },
        },
        updatedBy: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    },
    transformData: (result: any) => {
      result.categoryName = result.category?.name;

      delete result.category;

      return result;
    },
    beforeCreate: async (data: any, user: any) => {
      if (data.fundId) {
        const { taskId, projectId } = await getFundRelatedIds(data.fundId);
        if (taskId) data.taskId = taskId;
        if (projectId) data.projectId = projectId;
      }
      return data;
    },
    beforeUpdate: async (data: any, id: string, user: any) => {
      if (data.fundId) {
        const { taskId, projectId } = await getFundRelatedIds(data.fundId);
        if (taskId) data.taskId = taskId;
        if (projectId) data.projectId = projectId;
      }
      return data;
    },
  }),
  fixMissingRelatedIds: async () => {
    const expensesWithFund = await prisma.expense.findMany({
      where: {
        fundId: { not: null },
        OR: [{ taskId: null }, { projectId: null }],
      },
      select: {
        id: true,
        fundId: true,
      },
    });

    for (const expense of expensesWithFund) {
      const { taskId, projectId } = await getFundRelatedIds(expense.fundId);

      await prisma.expense.update({
        where: { id: expense.id },
        data: {
          taskId: taskId || undefined,
          projectId: projectId || undefined,
        },
      });
    }
  },
};

const getFundRelatedIds = async (fundId: string) => {
  const fund = await prisma.fund.findUnique({
    where: { id: fundId },
    select: {
      taskId: true,
      task: {
        select: {
          milestoneId: true,
          milestone: {
            select: {
              projectId: true,
            },
          },
        },
      },
    },
  });

  return {
    taskId: fund?.taskId || undefined,
    projectId: fund?.task?.milestone?.projectId || undefined,
  };
};

// Helper function to calculate parent amounts based on children
const calculateParentAmount = async (items: any[]) => {
  // Get all unique categoryIds from items
  const categoryIds = items.map((item) => item.categoryId).filter(Boolean);

  // Fetch categories with their parent/child relationships
  const categories = await prisma.costType.findMany({
    where: { id: { in: categoryIds } },
    select: {
      id: true,
      parentId: true,
      children: {
        select: { id: true },
      },
    },
  });

  // Create maps for quick lookup
  const categoryMap = new Map(categories.map((c) => [c.id, c]));
  const childToParentMap = new Map();
  const parentCategories = categories.filter(
    (c) => !c.parentId && c.children.length > 0
  );

  parentCategories.forEach((parent) => {
    parent.children.forEach((child) => {
      childToParentMap.set(child.id, parent.id);
    });
  });

  // Calculate sums for parent categories based on children
  const parentSums = new Map();

  items.forEach((item) => {
    const parentId = childToParentMap.get(item.categoryId);
    if (parentId && item.amount > 0) {
      const currentSum = parentSums.get(parentId) || 0;
      parentSums.set(parentId, currentSum + Number(item.amount));
    }
  });

  // Update parent items with calculated sums if children exist
  return items.map((item) => {
    const category = categoryMap.get(item.categoryId);
    if (category && !category.parentId && parentSums.has(item.categoryId)) {
      // This is a parent with children that have amounts
      return { ...item, amount: parentSums.get(item.categoryId) };
    }
    return item;
  });
};

export { budgetService, costTypeService, expenseService, fundService };
