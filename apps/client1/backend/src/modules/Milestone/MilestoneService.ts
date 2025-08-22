import prisma from "@shared/lib/prisma";
import { calculateDuration } from "@shared/shared/utils/calculateDuration";
import { serviceFactory } from "@shared/shared/utils/serviceFactory";
import { applyStageUpdate } from "@shared/shared/utils/stageGenerator";

const service = {
  model: "milestone",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      order: true,
      title: true,
      description: true,
      startDate: true,
      endDate: true,
      approvedDate: true,
      finishedDate: true,
      share: true,
      amount: true,
      deliverables: true,
      progress: true,
      revision: true,
      createdAt: true,
      updatedAt: true,
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
      contract: {
        select: {
          id: true,
          regNumber: true,
          client: {
            select: {
              name: true,
            },
          },
          product: {
            select: {
              name: true,
            },
          },
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
    result.contractId = result.contract?.id;
    result.contractNumber = result.contract?.regNumber;
    result.productName = result.contract?.product?.name;
    result.clientName = result.contract?.client?.name;

    if (result.startDate && result.endDate) {
      result.duration = calculateDuration(result.startDate, result.endDate);
    }

    result.taskCount = result.tasks?.length || 0;

    delete result.contract;
    delete result.tasks;

    return result;
  },
};

// MilestoneService.ts - Add this method after the serviceFactory spread
export const milestoneService = {
  ...serviceFactory(service.model, service),
  approve: async (body: any, user: any) => {
    const { approvedDate, milestoneIds } = body;

    if (!approvedDate || !milestoneIds || milestoneIds.length === 0) {
      throw new Error("Approval date and milestone IDs are required");
    }

    // Find the "Approved" stage type for milestone model
    const approvedStageType = await prisma.stageType.findFirst({
      where: {
        model: "milestone",
        value: "Approved", // or label: "Approved" depending on your data
      },
    });

    if (!approvedStageType) {
      throw new Error("Approved stage type not found");
    }

    // Update multiple milestones with the approval date
    const result = await prisma.milestone.updateMany({
      where: {
        id: {
          in: milestoneIds,
        },
      },
      data: {
        approvedDate: new Date(approvedDate),
      },
    });

    // Add stage tracking for each approved milestone
    for (const milestoneId of milestoneIds) {
      const stages = await applyStageUpdate(
        service.model,
        approvedStageType.id,
        body.stageComment || "Milestone approved",
        user.id
      );

      if (stages) {
        await prisma.milestone.update({
          where: { id: milestoneId },
          data: { stages },
        });
      }
    }

    return {
      success: true,
      count: result.count,
      message: `${result.count} milestone(s) approved successfully`,
    };
  },
};
