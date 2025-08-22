import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionCreateWithoutCreatedByInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutCreatedByInput.schema';
import { DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema } from './DepartmentPermissionCreateOrConnectWithoutCreatedByInput.schema';
import { DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { DepartmentPermissionCreateManyCreatedByInputEnvelopeObjectSchema } from './DepartmentPermissionCreateManyCreatedByInputEnvelope.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInput.schema';
import { DepartmentPermissionScalarWhereInputObjectSchema } from './DepartmentPermissionScalarWhereInput.schema'

export const DepartmentPermissionUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateManyWithoutCreatedByNestedInput, Prisma.DepartmentPermissionUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentPermissionUpdateManyWithoutCreatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
