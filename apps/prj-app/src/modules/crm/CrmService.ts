import { calculateDuration } from "@shared/utils/query/calculateDuration";
import { serviceFactory } from "@shared/utils/serviceFactory";
import { z } from "zod";
import { setFieldAndStageForRelation } from "@shared/utils/mutation/setRelationStage";

const leadService = {
  ...serviceFactory("lead", {
    operations: ["findMany", "findUnique", "update"],
    queryOptions: {
      select: {
        id: true,
        regNumber: true,
        name: true,
        role: true,
        email: true,
        phone: true,
        leadSource: true,
        leadDate: true,
        leadAddress: true,
        description: true,
        prospectLocation: true,
        expectedCloseDate: true,
        approvedDate: true,
        createdAt: true,
        updatedAt: true,
        clientId: true,
        client: {
          select: {
            id: true,
            name: true,
          },
        },
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
      },
    },
    transformData: (result: any) => {
      result.productIds = result.products?.map((product: any) => product.id);
      result.products = result.products
        ?.map((product: any) => product.name)
        .join(", ");
      result.opportunityCount = result.opportunities?.length || 0;
      result.clientName = result.client?.name;

      delete result.opportunities;
      delete result.client;

      return result;
    },
    beforeUpdate: async (data: any, id: string, user: any) => {
      if (data.productIds !== undefined) {
        if (data.productIds.length > 0) {
          data.products = {
            set: data.productIds.map((id: string) => ({ id })),
          };
        } else {
          data.products = {
            set: [],
          };
        }
        delete data.productIds;
      }

      return data;
    },
  }),
};

const opportunityService = {
  ...serviceFactory("opportunity", {
    operations: ["findMany", "findUnique"],
    queryOptions: {
      select: {
        id: true,
        regNumber: true,
        title: true,
        currency: true,
        baseAmount: true,
        exchangeRate: true,
        amount: true,
        expectedCloseDate: true,
        description: true,
        approvedDate: true,
        leadId: true,
        clientId: true,
        client: {
          select: {
            id: true,
            name: true,
          },
        },
        createdAt: true,
        updatedAt: true,
        products: {
          select: {
            id: true,
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
      result.productIds = result.products?.map((product: any) => product.id);
      result.products = result.products
        ?.map((product: any) => product.name)
        .join(", ");

      result.leadCount = result.lead?.length || 0;
      result.leadNumber = result.lead?.regNumber;
      result.leadId = result.lead?.id;

      result.quoteCount = result.quotes?.length || 0;
      result.clientName = result.client?.name;

      delete result.client;

      delete result.lead;
      delete result.quotes;

      return result;
    },
    beforeUpdate: async (data: any, id: string, user: any) => {
      if (data.productIds !== undefined) {
        if (data.productIds.length > 0) {
          data.products = {
            set: data.productIds.map((id: string) => ({ id })),
          };
        } else {
          data.products = {
            set: [],
          };
        }
        delete data.productIds;
      }

      return data;
    },
  }),
};

const quoteService = {
  ...serviceFactory("quote", {
    operations: ["findMany", "findUnique", "update"],
    queryOptions: {
      select: {
        id: true,
        regNumber: true,
        title: true,
        currency: true,
        baseAmount: true,
        exchangeRate: true,
        amount: true,
        releasedDate: true,
        approvedDate: true,
        expiredDate: true,
        description: true,
        opportunityId: true,
        createdAt: true,
        updatedAt: true,
        clientId: true,
        expectedCloseDate: true,
        client: {
          select: {
            id: true,
            name: true,
          },
        },
        products: {
          select: {
            id: true,
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
      result.productIds = result.products?.map((product: any) => product.id);
      result.products = result.products
        ?.map((product: any) => product.name)
        .join(", ");

      result.opportunityCount = result.opportunity?.length || 0;
      result.opportunityNumber = result.opportunity?.regNumber;
      result.opportunityId = result.opportunity?.id;

      result.contractCount = result.contracts?.length || 0;
      result.clientName = result.client?.name;

      delete result.client;

      delete result.opportunity;
      delete result.contracts;

      return result;
    },
    beforeUpdate: async (data: any, id: string, user: any) => {
      if (data.productIds !== undefined) {
        if (data.productIds.length > 0) {
          data.products = {
            set: data.productIds.map((id: string) => ({ id })),
          };
        } else {
          data.products = {
            set: [],
          };
        }
        delete data.productIds;
      }

      return data;
    },
  }),
};

const contractService = {
  ...serviceFactory("contract", {
    operations: ["findMany", "findUnique"],
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
        currency: true,
        baseAmount: true,
        exchangeRate: true,
        amount: true,
        clientPicName: true,
        revision: true,
        assigneeId: true,
        createdAt: true,
        updatedAt: true,
        clientId: true,
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
            createdAt: true,
            createdBy: {
              select: {
                username: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        assignee: {
          select: {
            username: true,
          },
        },
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
        quote: {
          select: {
            id: true,
            regNumber: true,
          },
        },
      },
    },
    transformData: (result: any) => {
      result.productIds = result.products?.map((product: any) => product.id);
      result.products = result.products
        ?.map((product: any) => product.name)
        .join(", ");
      result.clientName = result.client?.name;

      result.projectId = result.project?.id;
      result.projectNumber = result.project?.regNumber;
      result.projectCount = result.project ? 1 : 0;

      result.quoteId = result.quote?.id;
      result.quoteNumber = result.quote?.regNumber;
      result.quoteCount = result.quote ? 1 : 0;

      if (result.startDate && result.endDate) {
        result.duration = calculateDuration(result.startDate, result.endDate);
      }

      delete result.client;
      delete result.project;
      delete result.quote;

      return result;
    },
    beforeUpdate: async (data: any, id: string, user: any) => {
      if (data.productIds !== undefined) {
        if (data.productIds.length > 0) {
          data.products = {
            set: data.productIds.map((id: string) => ({ id })),
          };
        } else {
          data.products = {
            set: [],
          };
        }
        delete data.productIds;
      }

      return data;
    },
  }),
};

export { leadService, opportunityService, quoteService, contractService };
