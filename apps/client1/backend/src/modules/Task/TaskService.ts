import prisma from "@shared/lib/prisma";
import { milestoneService } from "@/modules/Milestone/MilestoneService";
import { projectService } from "@/modules/Project/ProjectService";
import { stageService } from "@/modules/Stage/StageService";
import { calculateDuration } from "@shared/utils/calculateDuration";
import {
  calculateWeightedProgress,
  calculateProjectProgress,
} from "@shared/utils/calculateProgress";
import { calculateBudgetComparison } from "@shared/utils/compareBudgetExpense";
import { serviceFactory } from "@shared/utils/serviceFactory";

const service = {
  model: "task",
  operations: ["create", "update", "findMany", "findUnique", "upsert"],
  queryOptions: {
    select: {
      id: true,
      order: true,
      title: true,
      plannedStartDate: true,
      plannedEndDate: true,
      actualStartDate: true,
      actualEndDate: true,
      metrics: true,
      progress: true,
      remarks: true,
      projectId: true,
      milestoneId: true,
      assigneeId: true,
      createdAt: true,
      updatedAt: true,
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
      milestone: {
        select: {
          id: true,
          title: true,
        },
      },
      project: {
        select: {
          id: true,
          regNumber: true,
        },
      },
      purchases: {
        select: {
          id: true,
          regNumber: true,
        },
      },
    },
  },
  transformData: async (result: any) => {
    if (result.plannedStartDate && result.plannedEndDate) {
      result.duration = calculateDuration(
        result.plannedStartDate,
        result.plannedEndDate
      );
    }

    result.budgetSummary = await calculateBudgetComparison(result.id, "taskId");

    result.milestoneTitle = result.milestone?.title || null;
    result.projectNumber = result.project?.regNumber || null;

    delete result.milestone;
    delete result.project;
    return result;
  },
  beforeUpdate: async (data: any, id: string, user: any) => {
    if (data.progress !== undefined && data.progress > 100) {
      throw new Error("Progress cannot exceed 100%");
    }
    return data;
  },
  afterCreate: async (record: any, context: any = {}) => {
    await updateProgressAndStages(record, record.createdById);
  },
  afterUpdate: async (record: any) => {
    if (record.progress < 100) {
      record = await prisma.task.update({
        where: { id: record.id },
        data: { actualEndDate: null },
      });
    }

    await updateProgressAndStages(record, record.updatedById);
  },
};

export const taskService = {
  ...serviceFactory(service.model, service),
};

const updateProgressAndStages = async (record: any, userId: string) => {
  const taskRecord = await prisma.task.findUnique({
    where: { id: record.id },
    select: {
      milestoneId: true,
      projectId: true,
    },
  });

  if (!taskRecord) {
    throw new Error("Task not found");
  }

  // Calculate and update milestone progress
  const milestoneProgress = await calculateWeightedProgress(
    taskRecord.milestoneId
  );

  // Get current milestone with latest stage
  const currentMilestone = await prisma.milestone.findUnique({
    where: { id: taskRecord.milestoneId },
    include: {
      stages: {
        orderBy: { createdAt: "desc" },
        take: 1,
        include: { type: true },
      },
    },
  });

  const currentMilestoneStageValue = currentMilestone?.stages[0]?.type?.value;

  // Prepare milestone update data
  let milestoneUpdateData: any = { progress: milestoneProgress };

  // Handle finishedDate for milestone
  if (milestoneProgress === 100) {
    milestoneUpdateData.finishedDate = new Date();
  } else if (milestoneProgress < 100) {
    milestoneUpdateData.finishedDate = null;
  }

  // Determine target stage based on progress
  let targetMilestoneStage = null;
  if (milestoneProgress === 100) {
    targetMilestoneStage = "Done";
  } else if (milestoneProgress > 0 && milestoneProgress < 100) {
    targetMilestoneStage = "In Progress";
  }

  // Create new stage if different from current
  if (
    targetMilestoneStage &&
    targetMilestoneStage !== currentMilestoneStageValue
  ) {
    const stageType = await prisma.stageType.findFirst({
      where: {
        model: "milestone",
        value: targetMilestoneStage,
      },
    });

    if (stageType) {
      await stageService.create(
        {
          stageTypeId: stageType.id,
          milestoneId: taskRecord.milestoneId,
          comment:
            targetMilestoneStage === "Done"
              ? "Milestone completed - 100% progress"
              : "Progress updated",
          createdById: userId,
        },
        { id: userId }
      );
    }
  }

  // Update milestone progress and finishedDate
  await milestoneService.update(milestoneUpdateData, taskRecord.milestoneId, {
    id: userId,
  });

  // Calculate project progress using projectId from task
  const projectProgress = await calculateProjectProgress(taskRecord.projectId);

  // Get current project stage
  const currentProject = await prisma.project.findUnique({
    where: { id: taskRecord.projectId },
    include: {
      stages: {
        orderBy: { createdAt: "desc" },
        take: 1,
        include: { type: true },
      },
    },
  });

  const currentProjectStageValue = currentProject?.stages[0]?.type?.value;

  // Prepare project update data
  let projectUpdateData: any = { progress: projectProgress };

  // Handle finishedDate for project
  if (projectProgress === 100) {
    projectUpdateData.finishedDate = new Date();
  } else if (projectProgress < 100) {
    projectUpdateData.finishedDate = null;
  }

  // Determine target stage
  let targetProjectStage = null;
  if (projectProgress === 100) {
    targetProjectStage = "Done";
  } else if (projectProgress > 0 && projectProgress < 100) {
    targetProjectStage = "In Progress";
  }

  // Create new stage if different
  if (targetProjectStage && targetProjectStage !== currentProjectStageValue) {
    const stageType = await prisma.stageType.findFirst({
      where: {
        model: "project",
        value: targetProjectStage,
      },
    });

    if (stageType) {
      await stageService.create(
        {
          stageTypeId: stageType.id,
          projectId: taskRecord.projectId,
          comment:
            targetProjectStage === "Done"
              ? "Project completed - 100% progress"
              : "Progress updated",
          createdById: userId,
        },
        { id: userId }
      );
    }
  }

  // Update project progress and finishedDate
  await projectService.update(projectUpdateData, taskRecord.projectId, {
    id: userId,
  });
};
