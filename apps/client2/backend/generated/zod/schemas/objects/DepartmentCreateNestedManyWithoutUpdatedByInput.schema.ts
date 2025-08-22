import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateWithoutUpdatedByInputObjectSchema } from './DepartmentCreateWithoutUpdatedByInput.schema';
import { DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema } from './DepartmentUncheckedCreateWithoutUpdatedByInput.schema';
import { DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema } from './DepartmentCreateOrConnectWithoutUpdatedByInput.schema';
import { DepartmentCreateManyUpdatedByInputEnvelopeObjectSchema } from './DepartmentCreateManyUpdatedByInputEnvelope.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema'

export const DepartmentCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentCreateNestedManyWithoutUpdatedByInput, Prisma.DepartmentCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentCreateNestedManyWithoutUpdatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentWhereUniqueInputObjectSchema), z.lazy(() => DepartmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
