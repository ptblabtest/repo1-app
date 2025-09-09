import { serviceFactory } from "@shared/utils/serviceFactory";

const service = {
  model: "product",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      name: true,
      description: true,
      createdAt: true,
      updatedAt: true,
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
};

export const productService = {
  ...serviceFactory(service.model, service),
};
