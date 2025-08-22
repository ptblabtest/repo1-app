import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateWithoutUsersInputObjectSchema } from './PermissionCreateWithoutUsersInput.schema';
import { PermissionUncheckedCreateWithoutUsersInputObjectSchema } from './PermissionUncheckedCreateWithoutUsersInput.schema';
import { PermissionCreateOrConnectWithoutUsersInputObjectSchema } from './PermissionCreateOrConnectWithoutUsersInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema'

export const PermissionCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.PermissionCreateNestedOneWithoutUsersInput, Prisma.PermissionCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional()
}).strict();
export const PermissionCreateNestedOneWithoutUsersInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional()
}).strict();
