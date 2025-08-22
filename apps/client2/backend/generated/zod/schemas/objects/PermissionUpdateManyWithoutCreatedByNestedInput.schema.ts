import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateWithoutCreatedByInputObjectSchema } from './PermissionCreateWithoutCreatedByInput.schema';
import { PermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './PermissionUncheckedCreateWithoutCreatedByInput.schema';
import { PermissionCreateOrConnectWithoutCreatedByInputObjectSchema } from './PermissionCreateOrConnectWithoutCreatedByInput.schema';
import { PermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PermissionUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { PermissionCreateManyCreatedByInputEnvelopeObjectSchema } from './PermissionCreateManyCreatedByInputEnvelope.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PermissionUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { PermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './PermissionUpdateManyWithWhereWithoutCreatedByInput.schema';
import { PermissionScalarWhereInputObjectSchema } from './PermissionScalarWhereInput.schema'

export const PermissionUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.PermissionUpdateManyWithoutCreatedByNestedInput, Prisma.PermissionUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PermissionScalarWhereInputObjectSchema), z.lazy(() => PermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PermissionUpdateManyWithoutCreatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PermissionScalarWhereInputObjectSchema), z.lazy(() => PermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
