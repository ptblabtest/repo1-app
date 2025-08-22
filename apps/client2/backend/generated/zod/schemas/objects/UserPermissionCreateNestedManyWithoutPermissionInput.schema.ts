import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateWithoutPermissionInputObjectSchema } from './UserPermissionCreateWithoutPermissionInput.schema';
import { UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './UserPermissionUncheckedCreateWithoutPermissionInput.schema';
import { UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema } from './UserPermissionCreateOrConnectWithoutPermissionInput.schema';
import { UserPermissionCreateManyPermissionInputEnvelopeObjectSchema } from './UserPermissionCreateManyPermissionInputEnvelope.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema'

export const UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateNestedManyWithoutPermissionInput, Prisma.UserPermissionCreateNestedManyWithoutPermissionInput> = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyPermissionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserPermissionCreateNestedManyWithoutPermissionInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyPermissionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
