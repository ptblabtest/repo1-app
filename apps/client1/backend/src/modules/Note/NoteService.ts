import { serviceFactory } from "@shared/shared/utils/serviceFactory";

const service = {
  model: "note",
  operations: ["create", "update", "findMany", "findUnique", "delete"],
  queryOptions: {
    select: {
      id: true,
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

export const noteService = {
  ...serviceFactory(service.model, service),
};
