import { calculateDuration } from "@shared/utils/calculateDuration";
import { serviceFactory } from "@shared/utils/serviceFactory";

const service = {
  model: "activity",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      description: true,
      startDateTime: true,
      endDateTime: true,
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
  transformData: (result: any) => {
    if (result.startDateTime && result.endDateTime) {
      result.duration = calculateDuration(
        result.startDateTime,
        result.endDateTime,
        "ymdh"
      );
    }

    return result;
  },
};

export const activityService = {
  ...serviceFactory(service.model, service),
};
