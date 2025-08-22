import { serviceFactory } from "@shared/shared/utils/serviceFactory";

const service = {
  model: "vendor",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      name: true,
      address: true,
      phone: true,
      email: true,
      city: true,
      postalCode: true,
      legal: true,
      vendorCategory: true,
      contactName: true,
      contactRole: true,
      contactPhone: true,
      contactEmail: true,
      taxNumber: true,
      taxStatus: true,
      siupNumber: true,
      nibNumber: true,
      pkpNumber: true,
      productType: true,
      description: true,
      bankName: true,
      accountReferenceNumber: true,
      accountOwnerName: true,
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
    result.legalName = `${result.name}, ${result.legal}`;

    return result;
  },
};

export const vendorService = {
  ...serviceFactory(service.model, service),
};
