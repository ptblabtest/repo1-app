import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateWithoutPermissionInputObjectSchema } from './DepartmentPermissionCreateWithoutPermissionInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutPermissionInput.schema';
import { DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema } from './DepartmentPermissionCreateOrConnectWithoutPermissionInput.schema';
import { DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema } from './DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInput.schema';
import { DepartmentPermissionCreateManyPermissionInputEnvelopeObjectSchema } from './DepartmentPermissionCreateManyPermissionInputEnvelope.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema } from './DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInput.schema';
import { DepartmentPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema } from './DepartmentPermissionUpdateManyWithWhereWithoutPermissionInput.schema';
import { DepartmentPermissionScalarWhereInputObjectSchema } from './DepartmentPermissionScalarWhereInput.schema'

export const DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInput, Prisma.DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInput> = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyPermissionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyPermissionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
