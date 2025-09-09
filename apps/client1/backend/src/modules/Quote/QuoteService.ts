import { serviceFactory } from "@shared/utils/serviceFactory";

const service = {
  model: "quote",
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
      releasedDate: true,
      approvedDate: true,
      expiredDate: true,
      description: true,
      productId: true,
      opportunityId: true,
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
      opportunity: {
        select: {
          id: true,
          regNumber: true,
        },
      },
      contracts: {
        select: {
          id: true,
        },
      },
    },
  },
  transformData: (result: any) => {
    result.productName = result.product?.name;

    result.opportunityCount = result.opportunity?.length || 0;
    result.opportunityNumber = result.opportunity?.regNumber;
    result.opportunityId = result.opportunity?.id;

    result.contractCount = result.contracts?.length || 0;

    delete result.product;
    delete result.opportunity;
    delete result.contracts;

    return result;
  },
};

export const quoteService = {
  ...serviceFactory(service.model, service),
};
