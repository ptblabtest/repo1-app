import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateWithoutUpdatedByInputObjectSchema } from './DepartmentCreateWithoutUpdatedByInput.schema';
import { DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema } from './DepartmentUncheckedCreateWithoutUpdatedByInput.schema';
import { DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema } from './DepartmentCreateOrConnectWithoutUpdatedByInput.schema';
import { DepartmentUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { DepartmentCreateManyUpdatedByInputEnvelopeObjectSchema } from './DepartmentCreateManyUpdatedByInputEnvelope.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { DepartmentUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './DepartmentUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { DepartmentScalarWhereInputObjectSchema } from './DepartmentScalarWhereInput.schema'

export const DepartmentUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateManyWithoutUpdatedByNestedInput, Prisma.DepartmentUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentScalarWhereInputObjectSchema), z.lazy(() => DepartmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DepartmentUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DepartmentUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DepartmentScalarWhereInputObjectSchema), z.lazy(() => DepartmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
