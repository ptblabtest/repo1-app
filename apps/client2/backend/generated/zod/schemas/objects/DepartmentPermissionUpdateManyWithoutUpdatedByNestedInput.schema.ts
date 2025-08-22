import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionCreateWithoutUpdatedByInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutUpdatedByInput.schema';
import { DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionCreateOrConnectWithoutUpdatedByInput.schema';
import { DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { DepartmentPermissionCreateManyUpdatedByInputEnvelopeObjectSchema } from './DepartmentPermissionCreateManyUpdatedByInputEnvelope.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { DepartmentPermissionScalarWhereInputObjectSchema } from './DepartmentPermissionScalarWhereInput.schema'

export const DepartmentPermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateManyWithoutUpdatedByNestedInput, Prisma.DepartmentPermissionUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentPermissionUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
