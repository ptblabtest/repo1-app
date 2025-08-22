import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateWithoutCreatedByInputObjectSchema } from './DepartmentCreateWithoutCreatedByInput.schema';
import { DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema } from './DepartmentUncheckedCreateWithoutCreatedByInput.schema';
import { DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema } from './DepartmentCreateOrConnectWithoutCreatedByInput.schema';
import { DepartmentCreateManyCreatedByInputEnvelopeObjectSchema } from './DepartmentCreateManyCreatedByInputEnvelope.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema'

export const DepartmentCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentCreateNestedManyWithoutCreatedByInput, Prisma.DepartmentCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentCreateNestedManyWithoutCreatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
