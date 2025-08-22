import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateWithoutUpdatedByInputObjectSchema } from './UserPermissionCreateWithoutUpdatedByInput.schema';
import { UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './UserPermissionUncheckedCreateWithoutUpdatedByInput.schema';
import { UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema } from './UserPermissionCreateOrConnectWithoutUpdatedByInput.schema';
import { UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { UserPermissionCreateManyUpdatedByInputEnvelopeObjectSchema } from './UserPermissionCreateManyUpdatedByInputEnvelope.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { UserPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './UserPermissionUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { UserPermissionScalarWhereInputObjectSchema } from './UserPermissionScalarWhereInput.schema'

export const UserPermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateManyWithoutUpdatedByNestedInput, Prisma.UserPermissionUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserPermissionUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => UserPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
