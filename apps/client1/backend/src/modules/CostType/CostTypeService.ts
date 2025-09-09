import { serviceFactory } from "@shared/utils/serviceFactory";

const service = {
  model: "costType",
  operations: ["create", "update", "findMany", "findUnique", "upsert"],
  queryOptions: {
    select: {
      id: true,
      order: true,
      name: true,
      parentId: true,
      parent: {
        select: {
          id: true,
          name: true,
        },
      },
      children: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  },
  transformData: (result: any) => {
    // Add parent name for easier access
    result.parentId = result.parentId || null;
    result.parentName = result.parent?.name;
    result.level = result.parentId ? "Child" : "Parent";

    delete result.parent;

    result.childrenCount = result.children?.length || 0;
    
    delete result.children;

    return result;
  },
};

export const costTypeService = {
  ...serviceFactory(service.model, service),
};
