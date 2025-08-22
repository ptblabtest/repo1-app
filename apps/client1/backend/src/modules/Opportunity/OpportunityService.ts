import { serviceFactory } from "@shared/shared/utils/serviceFactory";

const service = {
  model: "opportunity",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      title: true,
      company: true,
      currency: true,
      baseAmount: true,
      exchangeRate: true,
      amount: true,
      expectedCloseDate: true,
      description: true,
      approvedDate: true,
      productId: true,
      leadId: true,
      assigneeId: true,
      createdAt: true,
      updatedAt: true,
      product: {
        select: {
          id: true,
          name: true,
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
      lead: {
        select: {
          id: true,
          regNumber: true,
        },
      },
      quotes: {
        select: {
          id: true,
        },
      },
    },
  },
  transformData: (result: any) => {
    result.productName = result.product?.name;

    result.leadCount = result.lead?.length || 0;
    result.leadNumber = result.lead?.regNumber;
    result.leadId = result.lead?.id;

    result.quoteCount = result.quotes?.length || 0;

    delete result.product;
    delete result.lead;
    delete result.quotes;

    return result;
  },
};

export const opportunityService = {
  ...serviceFactory(service.model, service),
};
