
import { serviceFactory } from "@shared/shared/utils/serviceFactory";

const service = {
  model: "client",
  operations: ["create", "update", "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      regNumber: true,
      name: true,
      address: true,
      phone: true,
      email: true,
      legal: true,
      category: true,
      country: true,
      contactName: true,
      contactRole: true,
      contactPhone: true,
      contactEmail: true,
      taxNumber: true,
      taxAddress: true,
      taxStatus: true,
      procurementName: true,
      procurementRole: true,
      procurementPhone: true,
      procurementEmail: true,
      billingAddress: true,
      paymentName: true,
      paymentRole: true,
      paymentPhone: true,
      paymentEmail: true,
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

export const clientService = {
  ...serviceFactory(service.model, service),
};
