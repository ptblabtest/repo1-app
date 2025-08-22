import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateWithoutUpdatedByInputObjectSchema } from './PermissionCreateWithoutUpdatedByInput.schema';
import { PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PermissionUncheckedCreateWithoutUpdatedByInput.schema';
import { PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema } from './PermissionCreateOrConnectWithoutUpdatedByInput.schema';
import { PermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './PermissionUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { PermissionCreateManyUpdatedByInputEnvelopeObjectSchema } from './PermissionCreateManyUpdatedByInputEnvelope.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './PermissionUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { PermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './PermissionUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { PermissionScalarWhereInputObjectSchema } from './PermissionScalarWhereInput.schema'

export const PermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.PermissionUpdateManyWithoutUpdatedByNestedInput, Prisma.PermissionUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PermissionScalarWhereInputObjectSchema), z.lazy(() => PermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PermissionUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PermissionScalarWhereInputObjectSchema), z.lazy(() => PermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
