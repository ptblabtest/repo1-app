import { serviceFactory } from "@shared/utils/serviceFactory";

const service = {
  model: "lead",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      name: true,
      role: true,
      email: true,
      phone: true,
      companyName: true,
      companyAddress: true,
      leadSource: true,
      leadDate: true,
      leadAddress: true,
      description: true,
      prospectLocation: true,
      approvedDate: true,
      assigneeId: true,
      createdAt: true,
      updatedAt: true,
      products: {
        select: {
          id: true,
          name: true,
        },
      },
      opportunities: {
        select: {
          id: true,
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
      stages: {
        select: {
          id: true,
          type: true,
          comment: true,
        },
      },
    },
  },
  transformData: (result: any) => {
    result.productIds = result.products?.map((product: any) => product.id);
    result.products = result.products
      ?.map((product: any) => product.name)
      .join(", ");

    result.opportunityCount = result.opportunities?.length || 0;

    delete result.opportunities;

    return result;
  },
  beforeCreate: async (data: any, user: any, context: any = {}) => {
    if (data.productIds && data.productIds.length > 0) {
      data.products = {
        connect: data.productIds.map((id: string) => ({ id })),
      };
      delete data.productIds;
    }

    return data;
  },
  beforeUpdate: async (data: any, id: string, user: any) => {
    if (data.productIds !== undefined) {
      if (data.productIds.length > 0) {
        data.products = {
          set: data.productIds.map((id: string) => ({ id })),
        };
      } else {
        // Disconnect all products if empty array
        data.products = {
          set: [],
        };
      }
      delete data.productIds;
    }

    return data;
  },
};

export const leadService = {
  ...serviceFactory(service.model, service),
};
