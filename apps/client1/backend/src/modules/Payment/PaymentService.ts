import { serviceFactory } from "@shared/utils/serviceFactory";

const service = {
  model: "payment",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      clientId: true,
      vendorId: true,
      description: true,
      amount: true,
      date: true,
      type: true,
      createdAt: true,
      updatedAt: true,
      client: {
        select: {
          id: true,
          name: true,
        },
      },
      vendor: {
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

  transformData: (result: any) => {
    result.clientName = result.client?.name;
    result.vendorName = result.vendor?.name;

    delete result.client;
    delete result.vendor;

    return result;
  },
};

export const paymentService = {
  ...serviceFactory(service.model, service),
};
