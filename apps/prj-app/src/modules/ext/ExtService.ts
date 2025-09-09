import { calculateDuration } from "@shared/utils/query/calculateDuration";
import { serviceFactory } from "@shared/utils/serviceFactory";
import { z } from "zod";

const noteService = {
  ...serviceFactory("note", {
    operations: ["create", "update", "findMany", "findUnique", "delete"],
    schema: z.object({
      description: z.string().optional().nullable(),
      leadId: z.string().optional().nullable(),
      opportunityId: z.string().optional().nullable(),
      quoteId: z.string().optional().nullable(),
      contractId: z.string().optional().nullable(),
      projectId: z.string().optional().nullable(),
      milestoneId: z.string().optional().nullable(),
      taskId: z.string().optional().nullable(),
      budgetId: z.string().optional().nullable(),
      fundId: z.string().optional().nullable(),
      expenseId: z.string().optional().nullable(),
      clientId: z.string().optional().nullable(),
      vendorId: z.string().optional().nullable(),
      createdById: z.string().optional().nullable(),
      updatedById: z.string().optional().nullable(),
      pipelineId: z.string().optional().nullable(),
    }),
    queryOptions: {
      select: {
        id: true,
        description: true,
        createdAt: true,
        updatedAt: true,
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
    },
  }),
};

const eventService = {
  ...serviceFactory("event", {
    operations: ["create", "update", "findMany", "findUnique"],
    schema: z.object({
      title: z.string().min(1, "Title is required"),
      category: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      startDate: z.coerce.date().optional().nullable(),
      endDate: z.coerce.date().optional().nullable(),
      url: z.string().optional().nullable(),
      leadId: z.string().optional().nullable(),
      opportunityId: z.string().optional().nullable(),
      quoteId: z.string().optional().nullable(),
      contractId: z.string().optional().nullable(),
      projectId: z.string().optional().nullable(),
      milestoneId: z.string().optional().nullable(),
      taskId: z.string().optional().nullable(),
      pipelineId: z.string().optional().nullable(),
      createdById: z.string().optional().nullable(),
      updatedById: z.string().optional().nullable(),
    }),
    queryOptions: {
      select: {
        id: true,
        title: true,
        category: true,
        description: true,
        startDate: true,
        endDate: true,
        url: true,
        leadId: true,
        opportunityId: true,
        quoteId: true,
        contractId: true,
        projectId: true,
        milestoneId: true,
        taskId: true,
        createdAt: true,
        updatedAt: true,
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
    },
    transformData: (result: any) => {
      if (result.startDate && result.endDate) {
        result.duration = calculateDuration(result.startDate, result.endDate);
      }
      return result;
    },
  }),
};

export { noteService, eventService };
