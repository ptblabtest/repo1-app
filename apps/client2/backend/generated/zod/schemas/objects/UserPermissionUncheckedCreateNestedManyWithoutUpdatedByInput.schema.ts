import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateWithoutUpdatedByInputObjectSchema } from './UserPermissionCreateWithoutUpdatedByInput.schema';
import { UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './UserPermissionUncheckedCreateWithoutUpdatedByInput.schema';
import { UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema } from './UserPermissionCreateOrConnectWithoutUpdatedByInput.schema';
import { UserPermissionCreateManyUpdatedByInputEnvelopeObjectSchema } from './UserPermissionCreateManyUpdatedByInputEnvelope.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema'

export const UserPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUncheckedCreateNestedManyWithoutUpdatedByInput, Prisma.UserPermissionUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
