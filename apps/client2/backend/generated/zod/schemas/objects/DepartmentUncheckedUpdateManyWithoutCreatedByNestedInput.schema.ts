import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateWithoutCreatedByInputObjectSchema } from './DepartmentCreateWithoutCreatedByInput.schema';
import { DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema } from './DepartmentUncheckedCreateWithoutCreatedByInput.schema';
import { DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema } from './DepartmentCreateOrConnectWithoutCreatedByInput.schema';
import { DepartmentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './DepartmentUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { DepartmentCreateManyCreatedByInputEnvelopeObjectSchema } from './DepartmentCreateManyCreatedByInputEnvelope.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './DepartmentUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { DepartmentUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './DepartmentUpdateManyWithWhereWithoutCreatedByInput.schema';
import { DepartmentScalarWhereInputObjectSchema } from './DepartmentScalarWhereInput.schema'

export const DepartmentUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput, Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentScalarWhereInputObjectSchema), z.lazy(() => DepartmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentUncheckedUpdateManyWithoutCreatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentScalarWhereInputObjectSchema), z.lazy(() => DepartmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
