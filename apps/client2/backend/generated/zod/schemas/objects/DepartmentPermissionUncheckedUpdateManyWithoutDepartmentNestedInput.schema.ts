import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateWithoutDepartmentInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutDepartmentInput.schema';
import { DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateOrConnectWithoutDepartmentInput.schema';
import { DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInput.schema';
import { DepartmentPermissionCreateManyDepartmentInputEnvelopeObjectSchema } from './DepartmentPermissionCreateManyDepartmentInputEnvelope.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInput.schema';
import { DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInput.schema';
import { DepartmentPermissionScalarWhereInputObjectSchema } from './DepartmentPermissionScalarWhereInput.schema'

export const DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInput, Prisma.DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInput> = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyDepartmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentPermissionUncheckedUpdateManyWithoutDepartmentNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyDepartmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema), z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
