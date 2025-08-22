import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithoutUpdatedByInputObjectSchema } from './DepartmentUpdateWithoutUpdatedByInput.schema';
import { DepartmentUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './DepartmentUncheckedUpdateWithoutUpdatedByInput.schema'

export const DepartmentUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput, Prisma.DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const DepartmentUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
