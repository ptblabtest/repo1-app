import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryScalarWhereInputObjectSchema } from './ReportCategoryScalarWhereInput.schema';
import { ReportCategoryUpdateManyMutationInputObjectSchema } from './ReportCategoryUpdateManyMutationInput.schema';
import { ReportCategoryUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './ReportCategoryUncheckedUpdateManyWithoutUpdatedByInput.schema'

export const ReportCategoryUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateManyWithWhereWithoutUpdatedByInput, Prisma.ReportCategoryUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ReportCategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateManyMutationInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ReportCategoryUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateManyMutationInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
