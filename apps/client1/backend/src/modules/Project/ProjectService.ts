import prisma from "@shared/lib/prisma";
import { calculateBudgetComparison } from "@shared/shared/utils/compareBudgetExpense";
import { serviceFactory } from "@shared/shared/utils/serviceFactory";

const service = {
  model: "project",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      progress: true,
      finishedDate: true,
      contractId: true,
      assigneeId: true,
      createdAt: true,
      updatedAt: true,
      contract: {
        select: {
          regNumber: true,
          title: true,
          clientPicName: true,
          amount: true,
          client: {
            select: {
              id: true,
              name: true,
            },
          },
          product: {
            select: {
              id: true,
              name: true,
            },
          },
          milestones: {
            select: {
              id: true,
              order: true,
            },
            orderBy: {
              order: "asc",
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
      members: {
        select: {
          id: true,
          name: true,
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
  transformData: async (result: any) => {
    result.budgetSummary = await calculateBudgetComparison(
      result.id,
      "projectId"
    );

    result.contractTitle = result.contract?.title || null;
    result.contractNumber = result.contract?.regNumber || null;
    result.contractAmount = result.contract?.amount || null;
    result.clientName = result.contract?.client?.name || null;
    result.productName = result.contract?.product?.name || null;
    result.clientPicName = result.contract?.clientPicName || null;
    result.milestoneIds =
      result.contract.milestones?.map((milestone: any) => milestone.id) || [];

    delete result.contract;

    return result;
  },
};

export const projectService = {
  ...serviceFactory(service.model, service),
  // New Gantt method

  getGanttData: async (projectId: string) => {
    const projectData = await prisma.project.findUnique({
      where: { id: projectId },
      select: {
        id: true,
        regNumber: true,
        progress: true,
        finishedDate: true,
        contract: {
          select: {
            id: true,
            title: true,
            startDate: true,
            endDate: true,
            milestones: {
              orderBy: { order: "asc" },
              select: {
                id: true,
                order: true,
                title: true,
                startDate: true,
                endDate: true,
                approvedDate: true,
                finishedDate: true,
                progress: true,
              },
            },
          },
        },
        // Get tasks directly from project
        tasks: {
          orderBy: { order: "asc" },
          select: {
            id: true,
            order: true,
            title: true,
            plannedStartDate: true,
            plannedEndDate: true,
            actualStartDate: true,
            actualEndDate: true,
            progress: true,
            milestoneId: true, // Need this to group by milestone
            assignee: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!projectData) {
      throw new Error(`Project ${projectId} not found`);
    }

    return formatToGanttStructure(projectData);
  },
  getScurveData: async (projectId: string) => {
    const projectData = await prisma.project.findUnique({
      where: { id: projectId },
      select: {
        id: true,
        regNumber: true,
        contract: {
          select: {
            id: true,
            title: true,
            startDate: true,
            endDate: true,
            amount: true,
          },
        },
        tasks: {
          select: {
            id: true,
            budgets: {
              select: {
                amount: true,
              },
            },
            expenses: {
              select: {
                amount: true,
                date: true,
              },
              orderBy: {
                date: "asc",
              },
            },
          },
        },
      },
    });

    if (!projectData) {
      throw new Error(`Project ${projectId} not found`);
    }

    return formatToScurveStructure(projectData);
  },
};

// Updated helper function
const formatToGanttStructure = (projectData: any) => {
  const milestones = projectData.contract?.milestones || [];
  const tasks = projectData.tasks || [];

  // Group tasks by milestoneId
  const tasksByMilestone: any = {};
  tasks.forEach((task: any) => {
    if (!tasksByMilestone[task.milestoneId]) {
      tasksByMilestone[task.milestoneId] = [];
    }
    tasksByMilestone[task.milestoneId].push(task);
  });

  let projectStart = "";
  let projectEnd = "";
  const items: any[] = [];
  let totalTasks = 0;
  let completedTasks = 0;
  let delayedTasks = 0;

  milestones.forEach((milestone: any) => {
    const milestoneItem: any = {
      id: milestone.id,
      parentId: null,
      name: milestone.title || "",
      type: "milestone",
      order: milestone.order || 0,
      progress: milestone.progress || 0,
      plannedStart: milestone.startDate || "",
      plannedEnd: milestone.endDate || "",
      actualStart: milestone.approvedDate || "",
      actualEnd: milestone.finishedDate || "",
      isDelayed: false,
      isOnTrack: true,
      children: [],
    };

    // Check if milestone is delayed
    if (milestone.endDate && milestone.finishedDate) {
      milestoneItem.isDelayed =
        new Date(milestone.finishedDate) > new Date(milestone.endDate);
      milestoneItem.isOnTrack = !milestoneItem.isDelayed;
    }

    // Get tasks for this milestone
    const milestoneTasks = tasksByMilestone[milestone.id] || [];

    milestoneTasks.forEach((task: any) => {
      totalTasks++;
      if (task.progress === 100) completedTasks++;

      const taskItem: any = {
        id: task.id,
        parentId: milestone.id,
        name: task.title || "",
        type: "task",
        order: task.order || 0,
        progress: task.progress || 0,
        plannedStart: task.plannedStartDate || "",
        plannedEnd: task.plannedEndDate || "",
        actualStart: task.actualStartDate || "",
        actualEnd: task.actualEndDate || "",
        assignee: task.assignee?.name || "",
        isDelayed: false,
        isOnTrack: true,
      };

      // Check if task is delayed
      if (task.plannedEndDate && task.actualEndDate) {
        taskItem.isDelayed =
          new Date(task.actualEndDate) > new Date(task.plannedEndDate);
        if (taskItem.isDelayed) delayedTasks++;
      }

      milestoneItem.children.push(taskItem);

      // Update project date range
      updateDateRange(task.plannedStartDate, task.plannedEndDate);
      updateDateRange(task.actualStartDate, task.actualEndDate);
    });

    items.push(milestoneItem);

    // Update project date range from milestone
    updateDateRange(milestone.startDate, milestone.endDate);
  });

  function updateDateRange(start: any, end: any) {
    if (start && (!projectStart || new Date(start) < new Date(projectStart))) {
      projectStart = start;
    }
    if (end && (!projectEnd || new Date(end) > new Date(projectEnd))) {
      projectEnd = end;
    }
  }

  return {
    project: {
      id: projectData.id,
      name: projectData.contract?.title || "",
      regNumber: projectData.regNumber || "",
      startDate: projectStart || projectData.contract?.startDate || "",
      endDate: projectEnd || projectData.contract?.endDate || "",
      progress: projectData.progress || 0,
      type: "project",
    },
    items,
    summary: {
      totalTasks,
      completedTasks,
      delayedTasks,
      onTrackTasks: totalTasks - delayedTasks,
      overallProgress: projectData.progress || 0,
    },
  };
};


const formatToScurveStructure = (projectData: any) => {
  const startDate = projectData.contract?.startDate;
  const endDate = projectData.contract?.endDate;
  
  if (!startDate || !endDate) {
    throw new Error('Contract must have start and end dates for S-curve');
  }

  // Calculate total budget from all tasks
  let totalBudget = 0;
  const allExpenses: any[] = [];
  
  projectData.tasks.forEach((task: any) => {
    task.budgets.forEach((budget: any) => {
      totalBudget += Number(budget.amount || 0);
    });
    
    task.expenses.forEach((expense: any) => {
      if (expense.date) {
        allExpenses.push({
          date: expense.date,
          amount: Number(expense.amount || 0)
        });
      }
    });
  });

  // Generate intervals with auto-detection
  const intervals = generateIntervals(startDate, endDate);
  
  // Calculate planned budget distribution (evenly distributed)
  const plannedBudgetPerInterval = totalBudget / intervals.length;
  
  // Calculate cumulative values
  let cumulativePlanned = 0;
  let cumulativeActual = 0;
  
  const scurveData = intervals.map((interval: any) => {
    cumulativePlanned += plannedBudgetPerInterval;
    
    const periodExpenses = allExpenses.filter((expense: any) => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= interval.start && expenseDate <= interval.end;
    });
    
    const periodActualAmount = periodExpenses.reduce((sum: number, exp: any) => 
      sum + exp.amount, 0
    );
    cumulativeActual += periodActualAmount;
    
    return {
      period: interval.label,
      date: interval.end,
      plannedValue: Math.round(cumulativePlanned * 100) / 100,
      actualCost: Math.round(cumulativeActual * 100) / 100,
      variance: Math.round((cumulativePlanned - cumulativeActual) * 100) / 100
    };
  });

  const intervalType = determineIntervalType(startDate, endDate);

  return {
    project: {
      id: projectData.id,
      regNumber: projectData.regNumber,
      title: projectData.contract?.title || "",
      startDate,
      endDate,
      intervalType // Include this for frontend reference
    },
    summary: {
      totalBudget: Math.round(totalBudget * 100) / 100,
      totalExpenses: Math.round(cumulativeActual * 100) / 100,
      remaining: Math.round((totalBudget - cumulativeActual) * 100) / 100,
      percentSpent: totalBudget > 0 
        ? Math.round((cumulativeActual / totalBudget) * 10000) / 100 
        : 0
    },
    data: scurveData
  };
};

const determineIntervalType = (startDate: any, endDate: any) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const durationInDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  
  if (durationInDays <= 30) return 'daily';
  if (durationInDays <= 90) return 'weekly';
  if (durationInDays <= 365) return 'monthly';
  return 'quarterly';
};

const generateIntervals = (startDate: any, endDate: any) => {
  const intervalType = determineIntervalType(startDate, endDate);
  
  switch(intervalType) {
    case 'daily':
      return generateDailyIntervals(startDate, endDate);
    case 'weekly':
      return generateWeeklyIntervals(startDate, endDate);
    case 'monthly':
      return generateMonthlyIntervals(startDate, endDate);
    case 'quarterly':
      return generateQuarterlyIntervals(startDate, endDate);
    default:
      return generateMonthlyIntervals(startDate, endDate);
  }
};

const generateDailyIntervals = (startDate: any, endDate: any) => {
  const intervals = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  let current = new Date(start);
  
  while (current <= end) {
    intervals.push({
      start: new Date(current),
      end: new Date(current),
      label: current.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    });
    
    current.setDate(current.getDate() + 1);
  }
  
  return intervals;
};

const generateWeeklyIntervals = (startDate: any, endDate: any) => {
  const intervals = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  let current = new Date(start);
  
  while (current <= end) {
    const weekEnd = new Date(current);
    weekEnd.setDate(weekEnd.getDate() + 6);
    const actualEnd = weekEnd > end ? end : weekEnd;
    
    intervals.push({
      start: new Date(current),
      end: actualEnd,
      label: `W${Math.ceil((current.getDate()) / 7)} ${current.toLocaleDateString('en-US', { month: 'short' })}`
    });
    
    current.setDate(current.getDate() + 7);
  }
  
  return intervals;
};

const generateMonthlyIntervals = (startDate: any, endDate: any) => {
  const intervals = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  let current = new Date(start.getFullYear(), start.getMonth(), 1);
  
  while (current <= end) {
    const intervalEnd = new Date(current.getFullYear(), current.getMonth() + 1, 0);
    
    intervals.push({
      start: new Date(current),
      end: intervalEnd > end ? end : intervalEnd,
      label: `${current.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
    });
    
    current.setMonth(current.getMonth() + 1);
  }
  
  return intervals;
};

const generateQuarterlyIntervals = (startDate: any, endDate: any) => {
  const intervals = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  let current = new Date(start.getFullYear(), Math.floor(start.getMonth() / 3) * 3, 1);
  
  while (current <= end) {
    const quarterEnd = new Date(current.getFullYear(), current.getMonth() + 3, 0);
    const actualEnd = quarterEnd > end ? end : quarterEnd;
    
    const quarter = Math.floor(current.getMonth() / 3) + 1;
    intervals.push({
      start: new Date(current),
      end: actualEnd,
      label: `Q${quarter} ${current.getFullYear()}`
    });
    
    current.setMonth(current.getMonth() + 3);
  }
  
  return intervals;
};