import prisma from "../../lib/prisma";

// utils/budgetComparison.ts
export const calculateBudgetComparison = async (
  id: string,
  field: string = "taskId",
  showAll: boolean = true
) => {
  // Start by fetching all categories
  const allCategories = await prisma.costType.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  // Initialize categoryMap with all categories
  const categoryMap: any = {};
  allCategories.forEach((category: any) => {
    categoryMap[category.id] = {
      categoryName: category.name,
      budget: 0,
      expense: 0,
    };
  });

  let budgetWhere: any = {};
  let expenseWhere: any = {};

  // Handle different relations
  if (field === "projectId") {
    // For project, get through tasks
    budgetWhere = {
      budget: {
        task: {
          projectId: id,
        },
      },
    };
    expenseWhere = {
      task: {
        projectId: id,
      },
    };

    // Fetch budget items
    const budgetItems = await prisma.budgetItem.findMany({
      where: budgetWhere,
      select: {
        categoryId: true,
        amount: true,
      },
    });

    // Add budget amounts to categories
    budgetItems.forEach((item: any) => {
      if (item.categoryId && categoryMap[item.categoryId]) {
        categoryMap[item.categoryId].budget += Number(item.amount);
      }
    });

    // Fetch expenses
    const expenses = await prisma.expense.findMany({
      where: expenseWhere,
      select: {
        categoryId: true,
        amount: true,
      },
    });

    // Add expense amounts to categories
    expenses.forEach((expense: any) => {
      if (expense.categoryId && categoryMap[expense.categoryId]) {
        categoryMap[expense.categoryId].expense += Number(expense.amount);
      }
    });

    const purchaseItems = await prisma.purchaseItem.findMany({
      where: {
        purchase: {
          task: {
            projectId: id,
          },
        },
      },
      select: {
        categoryId: true,
        amount: true,
      },
    });

    // Add purchase item amounts to categories
    purchaseItems.forEach((item: any) => {
      if (item.categoryId && categoryMap[item.categoryId]) {
        categoryMap[item.categoryId].expense += Number(item.amount);
      }
    });
  } else if (field === "fundId") {
    // For fund, use fundItems as budget
    const fundItems = await prisma.fundItem.findMany({
      where: {
        fundId: id,
      },
      select: {
        categoryId: true,
        amount: true,
      },
    });

    // Add fund items as budget
    fundItems.forEach((item: any) => {
      if (item.categoryId && categoryMap[item.categoryId]) {
        categoryMap[item.categoryId].budget += Number(item.amount);
      }
    });

    // Fetch expenses
    const expenses = await prisma.expense.findMany({
      where: {
        fundId: id,
      },
      select: {
        categoryId: true,
        amount: true,
      },
    });

    // Add expense amounts to categories
    expenses.forEach((expense: any) => {
      if (expense.categoryId && categoryMap[expense.categoryId]) {
        categoryMap[expense.categoryId].expense += Number(expense.amount);
      }
    });
  } else {
    // Direct relation (taskId, milestoneId, etc) with budgetItems
    budgetWhere = {
      budget: {
        [field]: id,
      },
    };
    expenseWhere = {
      [field]: id,
    };

    // Fetch budget items
    const budgetItems = await prisma.budgetItem.findMany({
      where: budgetWhere,
      select: {
        categoryId: true,
        amount: true,
      },
    });

    // Add budget amounts to categories
    budgetItems.forEach((item: any) => {
      if (item.categoryId && categoryMap[item.categoryId]) {
        categoryMap[item.categoryId].budget += Number(item.amount);
      }
    });

    // Fetch expenses
    const expenses = await prisma.expense.findMany({
      where: expenseWhere,
      select: {
        categoryId: true,
        amount: true,
      },
    });

    // Add expense amounts to categories
    expenses.forEach((expense: any) => {
      if (expense.categoryId && categoryMap[expense.categoryId]) {
        categoryMap[expense.categoryId].expense += Number(expense.amount);
      }
    });

    if (field === "taskId") {
      const purchaseItems = await prisma.purchaseItem.findMany({
        where: {
          purchase: {
            taskId: id,
          },
        },
        select: {
          categoryId: true,
          amount: true,
        },
      });

      // Add purchase item amounts to categories
      purchaseItems.forEach((item: any) => {
        if (item.categoryId && categoryMap[item.categoryId]) {
          categoryMap[item.categoryId].expense += Number(item.amount);
        }
      });
    }
  }

  // Convert to array with calculations
  const categories = Object.entries(categoryMap)
    .map(([id, data]: any) => {
      const budgetAmount = data.budget;
      const expenseAmount = data.expense;
      const difference = budgetAmount - expenseAmount;
      const percentageUsed =
        budgetAmount > 0 ? Math.round((expenseAmount / budgetAmount) * 100) : 0;

      // Determine status
      let status: string;
      if (budgetAmount === 0 && expenseAmount > 0) {
        status = "No Budget"; // Expenses without budget
      } else if (expenseAmount === 0) {
        status = "Not Started"; // No expenses yet
      } else if (expenseAmount > budgetAmount) {
        status = "Over Budget";
      } else if (expenseAmount === budgetAmount) {
        status = "On Budget";
      } else {
        status = "Under Budget";
      }

      return {
        categoryId: id,
        categoryName: data.categoryName,
        budgetAmount: budgetAmount,
        expenseAmount: expenseAmount,
        difference: difference,
        percentageUsed: percentageUsed,
        status: status,
      };
    })
    .filter((cat: any) => {
      // Filter based on showAll parameter
      return showAll || cat.budgetAmount > 0 || cat.expenseAmount > 0;
    });

  // Calculate totals - Fixed to use correct property names
  const totals = categories.reduce(
    (acc: any, cat: any) => ({
      budget: acc.budget + cat.budgetAmount,
      expense: acc.expense + cat.expenseAmount,
    }),
    { budget: 0, expense: 0 }
  );

  return {
    categories,
    totals: {
      budget: totals.budget,
      expense: totals.expense,
      difference: totals.budget - totals.expense,
      percentageUsed:
        totals.budget > 0
          ? Math.round((totals.expense / totals.budget) * 100)
          : 0,
    },
  };
};
