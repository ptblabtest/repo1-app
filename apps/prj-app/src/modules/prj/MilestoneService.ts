import prisma from "@shared/lib/prisma";
import { setFieldAndStageForRelation } from "@shared/utils/mutation/setRelationStage";
import { calculateDuration } from "@shared/utils/query/calculateDuration";
import { calculateWeightedProgress } from "@shared/utils/query/calculateProgress";
import { serviceFactory } from "@shared/utils/serviceFactory";
import { z } from "zod";

export const milestoneService = {
  ...serviceFactory("milestone", {
    operations: ["findMany", "findUnique"],
    schema: z.object({
      order: z.coerce.number().optional().nullable(),
      title: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      plannedStartDate: z.coerce.date().optional().nullable(),
      plannedEndDate: z.coerce.date().optional().nullable(),
      actualStartDate: z.coerce.date().optional().nullable(),
      actualEndDate: z.coerce.date().optional().nullable(),
      approvedDate: z.coerce.date().optional().nullable(),
      share: z.coerce.number().optional().nullable(),
      amount: z.coerce.number().optional().nullable(),
      deliverables: z.string().optional().nullable(),
      progress: z.coerce.number().optional().nullable(),
      revision: z.coerce.number().optional().nullable(),
      projectId: z.string().optional().nullable(),
      assigneeId: z.string().optional().nullable(),
      createdById: z.string().optional().nullable(),
      updatedById: z.string().optional().nullable(),
      stages: z.any().optional().nullable(),
    }),
    queryOptions: {
      select: {
        id: true,
        order: true,
        title: true,
        description: true,
        plannedStartDate: true,
        plannedEndDate: true,
        actualStartDate: true,
        actualEndDate: true,
        approvedDate: true,
        share: true,
        amount: true,
        deliverables: true,
        progress: true,
        revision: true,
        createdAt: true,
        updatedAt: true,
        project: {
          select: {
            id: true,
            regNumber: true,
          },
        },
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
        tasks: {
          select: {
            id: true,
          },
        },
      },
    },
    transformData: (result: any) => {
      if (result.plannedStartDate && result.plannedEndDate) {
        result.plannedDuration = calculateDuration(
          result.plannedStartDate,
          result.plannedEndDate
        );
      }

      if (result.actualStartDate && result.actualEndDate) {
        result.actualDuration = calculateDuration(
          result.actualStartDate,
          result.actualEndDate
        );
      }

      result.projectNumber = result.project?.regNumber;

      delete result.project;

      result.taskCount = result.tasks?.length || 0;

      delete result.tasks;

      return result;
    },
  }),
};

export const updateMilestoneProgress = async (
  milestoneId: string,
  userId: string
) => {
  // Query milestone with its tasks
  const milestone = await prisma.milestone.findUnique({
    where: { id: milestoneId },
    select: {
      actualEndDate: true,
      tasks: {
        select: {
          actualEndDate: true,
        },
      },
    },
  });

  if (!milestone) return;

  // Use existing calculateWeightedProgress function
  const milestoneProgress = await calculateWeightedProgress(milestoneId);

  // Check if ALL tasks complete
  const allTasksComplete =
    milestone.tasks.length > 0 &&
    milestone.tasks.every((task: any) => task.actualEndDate !== null);

  // Handle actualEndDate and stages
  if (allTasksComplete) {
    await setFieldAndStageForRelation(
      milestoneId,
      "milestone",
      userId,
      "actualEndDate",
      "Done"
    );
  } else {
    // Clear actualEndDate if exists
    if (milestone.actualEndDate) {
      await prisma.milestone.update({
        where: { id: milestoneId },
        data: { actualEndDate: null },
      });
    }

    // Use setFieldAndStageForRelation for In Progress (it handles duplication)
    if (milestoneProgress > 0 && milestoneProgress < 100) {
      await setFieldAndStageForRelation(
        milestoneId,
        "milestone",
        userId,
        "actualStartDate", // We set actualStartDate, not a different field
        "In Progress"
      );
    }
  }

  // Update progress
  await prisma.milestone.update({
    where: { id: milestoneId },
    data: { progress: milestoneProgress },
  });
};
