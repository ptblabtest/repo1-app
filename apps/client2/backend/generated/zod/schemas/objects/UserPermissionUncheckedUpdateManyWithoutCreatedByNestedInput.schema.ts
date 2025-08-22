import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateWithoutCreatedByInputObjectSchema } from './UserPermissionCreateWithoutCreatedByInput.schema';
import { UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './UserPermissionUncheckedCreateWithoutCreatedByInput.schema';
import { UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema } from './UserPermissionCreateOrConnectWithoutCreatedByInput.schema';
import { UserPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './UserPermissionUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { UserPermissionCreateManyCreatedByInputEnvelopeObjectSchema } from './UserPermissionCreateManyCreatedByInputEnvelope.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './UserPermissionUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { UserPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './UserPermissionUpdateManyWithWhereWithoutCreatedByInput.schema';
import { UserPermissionScalarWhereInputObjectSchema } from './UserPermissionScalarWhereInput.schema'

export const UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput, Prisma.UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => UserPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
