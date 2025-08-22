import { milestoneService } from "@/modules/Milestone/MilestoneService";
import { calculateDuration } from "@shared/shared/utils/calculateDuration";
import { serviceFactory } from "@shared/shared/utils/serviceFactory";

const service = {
  model: "contract",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      title: true,
      signedDate: true,
      startDate: true,
      endDate: true,
      description: true,
      penalty: true,
      paymentTerm: true,
      currency: true,
      baseAmount: true,
      exchangeRate: true,
      amount: true,
      clientPicName: true,
      revision: true,
      clientId: true,
      productId: true,
      quoteId: true,
      assigneeId: true,
      createdAt: true,
      updatedAt: true,
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
      quote: {
        select: {
          id: true,
          regNumber: true,
        },
      },
      milestones: {
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
        },
      },
    },
  },
  transformData: (result: any) => {
    result.clientName = result.client?.name;
    result.productName = result.product?.name;

    result.projectId = result.project?.id;
    result.projectNumber = result.project?.regNumber;
    result.projectCount = result.project ? 1 : 0;

    result.quoteId = result.quote?.id;
    result.quoteNumber = result.quote?.regNumber;
    result.quoteCount = result.quote ? 1 : 0;

    result.milestoneCount = result.milestones?.length || 0;

    if (result.startDate && result.endDate) {
      result.duration = calculateDuration(result.startDate, result.endDate);
    }

    delete result.client;
    delete result.product;
    delete result.project;
    delete result.quote;

    return result;
  },
  beforeCreate: async (data: any, user: any, context: any = {}) => {
    context.milestones = data.milestones;
    context.user = user;
    context.assigneeId = data.assigneeId;
    delete data.milestones;

    data.paymentTerm = context.milestones?.length || 0;

    return data;
  },
  afterCreate: async (record: any, context: any = {}) => {
    if (context.milestones && context.milestones.length > 0) {
      for (let i = 0; i < context.milestones.length; i++) {
        await milestoneService.create(
          {
            ...context.milestones[i],
            order: i + 1,
            contractId: record.id,
            assigneeId: context.assigneeId,
          },
          context.user
        );
      }
    }

    return record;
  },
  beforeUpdate: async (data: any, id: string, user: any) => {
    data.paymentTerm = data.milestones?.length || 0;

    if (data.milestones && data.milestones.length > 0) {
      for (let i = 0; i < data.milestones.length; i++) {
        const milestone = data.milestones[i];

        if (milestone.id) {
          // Update existing milestone
          const { id: milestoneId, ...updateData } = milestone;
          await milestoneService.update(
            {
              ...updateData,
              order: i + 1,
            },
            milestoneId,
            user // Pass the user
          );
        } else {
          // Create new milestone
          await milestoneService.create(
            {
              ...milestone,
              order: i + 1,
              contractId: id,
              assigneeId: data.assigneeId,
            },
            user // Pass the user
          );
        }
      }

      // Remove milestones from update data
      delete data.milestones;
    }

    return data;
  },
};

export const contractService = {
  ...serviceFactory(service.model, service),
};
