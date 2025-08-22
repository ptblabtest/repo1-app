import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentScalarWhereInputObjectSchema } from './DepartmentScalarWhereInput.schema';
import { DepartmentUpdateManyMutationInputObjectSchema } from './DepartmentUpdateManyMutationInput.schema';
import { DepartmentUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './DepartmentUncheckedUpdateManyWithoutUpdatedByInput.schema'

export const DepartmentUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateManyWithWhereWithoutUpdatedByInput, Prisma.DepartmentUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => DepartmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const DepartmentUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
