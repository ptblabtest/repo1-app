export const selectConfig: Record<string, any> = {
  // users
  userId: {
    model: "user",
    select: {
      id: true,
      username: true,
    },
    mapToOption: (item: any) => ({
      value: item.id,
      label: `${item.username}`,
    }),
  },

  roleId: {
    model: "role",
    select: {
      id: true,
      name: true,
    },
    mapToOption: (item: any) => ({
      value: item.id,
      label: `${item.name}`,
    }),
  },
  organizationId: {
    model: "organization",
    select: {
      id: true,
      name: true,
      code: true,
    },
    mapToOption: (item: any) => ({
      value: item.id,
      label: `${item.name}`,
    }),
  },
};
