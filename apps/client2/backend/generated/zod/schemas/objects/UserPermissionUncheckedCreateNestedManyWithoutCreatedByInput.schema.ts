import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateWithoutCreatedByInputObjectSchema } from './UserPermissionCreateWithoutCreatedByInput.schema';
import { UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './UserPermissionUncheckedCreateWithoutCreatedByInput.schema';
import { UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema } from './UserPermissionCreateOrConnectWithoutCreatedByInput.schema';
import { UserPermissionCreateManyCreatedByInputEnvelopeObjectSchema } from './UserPermissionCreateManyCreatedByInputEnvelope.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema'

export const UserPermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput, Prisma.UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserPermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
