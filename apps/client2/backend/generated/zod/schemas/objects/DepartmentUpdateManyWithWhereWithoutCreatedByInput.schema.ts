import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentScalarWhereInputObjectSchema } from './DepartmentScalarWhereInput.schema';
import { DepartmentUpdateManyMutationInputObjectSchema } from './DepartmentUpdateManyMutationInput.schema';
import { DepartmentUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './DepartmentUncheckedUpdateManyWithoutCreatedByInput.schema'

export const DepartmentUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateManyWithWhereWithoutCreatedByInput, Prisma.DepartmentUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => DepartmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const DepartmentUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
