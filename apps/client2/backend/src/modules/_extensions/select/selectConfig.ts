export const selectEndpointsConfig: Record<string, any> = {
  // users
  userId: {
    model: "user",
    select: {
      id: true,
      name: true,
    },
    mapToOption: (item: any) => ({
      value: item.id,
      label: `${item.name}`,
    }),
  },

  // // process
  // leadId: {
  //   service: leadService,
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.regNumber} - ${item.companyName} - ${item.name}`,
  //   }),
  // },
  // opportunityId: {
  //   service: opportunityService,
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.regNumber} - ${item.company} - ${item.productName || ""}`,
  //   }),
  // },
  // quoteId: {
  //   service: quoteService,
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.regNumber} - ${item.title} - ${item.productName || ""}`,
  //   }),
  // },
  // contractId: {
  //   service: contractService,
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.regNumber} - ${item.clientName || ""} - ${
  //       item.productName || ""
  //     }`,
  //   }),
  // },
  // milestoneId: {
  //   model: "milestone",
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.order} - ${item.title}`,
  //   }),
  // },
  // projectId: {
  //   service: projectService,
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.regNumber}`,
  //   }),
  // },
  // taskId: {
  //   service: taskService,
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.order} - ${item.title} - ${item.projectNumber || ""}`,
  //   }),
  // },

  // // master data
  // clientId: {
  //   service: clientService,
  //   createMapping: (value: string) => ({
  //     name: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.regNumber} - ${item.legalName}`,
  //   }),
  // },
  // vendorId: {
  //   service: vendorService,
  //   createMapping: (value: string) => ({
  //     name: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.regNumber} - ${item.legalName}`,
  //   }),
  // },
  // productId: {
  //   service: productService,
  //   createMapping: (value: string) => ({
  //     name: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.name}`,
  //   }),
  // },

  // // other
  // categoryId: {
  //   model: "costType",
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.name}`,
  //   }),
  // },
  // stageTypeId: {
  //   model: "stageType",
  //   keyFilter: "model",
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.value}`,
  //   }),
  // },

  // // categories
  // leadSource: {
  //   model: "category",
  //   where: { key: "leadSource" },
  //   createMapping: (value: string) => ({
  //     value: value,
  //     label: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.value,
  //     label: `${item.label}`,
  //   }),
  // },
  // currency: {
  //   model: "category",
  //   where: { key: "currency" },
  //   createMapping: (value: string) => ({
  //     value: value,
  //     label: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.value,
  //     label: `${item.label}`,
  //   }),
  // },
  // legal: {
  //   model: "category",
  //   where: { key: "legal" },
  //   createMapping: (value: string) => ({
  //     value: value,
  //     label: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.value,
  //     label: `${item.label}`,
  //   }),
  // },
  // companyCategory: {
  //   model: "category",
  //   where: { key: "companyCategory" },
  //   createMapping: (value: string) => ({
  //     value: value,
  //     label: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.value,
  //     label: `${item.label}`,
  //   }),
  // },
  // bankName: {
  //   model: "category",
  //   where: { key: "bankName" },
  //   createMapping: (value: string) => ({
  //     value: value,
  //     label: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.value,
  //     label: `${item.label}`,
  //   }),
  // },
  // events: {
  //   model: "category",
  //   where: { key: "events" },
  //   createMapping: (value: string) => ({
  //     value: value,
  //     label: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.value,
  //     label: `${item.label}`,
  //   }),
  // },
  // productType: {
  //   model: "category",
  //   where: { key: "productType" },
  //   createMapping: (value: string) => ({
  //     value: value,
  //     label: value,
  //   }),
  //   mapToOption: (item: any) => ({
  //     value: item.value,
  //     label: `${item.label}`,
  //   }),
  // },
  // country: {
  //   model: "country",
  //   mapToOption: (item: any) => ({
  //     value: item.name,
  //     label: `${item.name}`,
  //   }),
  // },

  // // finance
  // accountId: {
  //   service: accountService,
  //   mapToOption: (item: any) => ({
  //     value: item.id,
  //     label: `${item.accountNumber} - ${item.accountName}`,
  //   }),
  // },
};
