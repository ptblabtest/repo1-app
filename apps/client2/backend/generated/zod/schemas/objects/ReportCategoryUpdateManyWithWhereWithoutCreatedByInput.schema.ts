import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryScalarWhereInputObjectSchema } from './ReportCategoryScalarWhereInput.schema';
import { ReportCategoryUpdateManyMutationInputObjectSchema } from './ReportCategoryUpdateManyMutationInput.schema';
import { ReportCategoryUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './ReportCategoryUncheckedUpdateManyWithoutCreatedByInput.schema'

export const ReportCategoryUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateManyWithWhereWithoutCreatedByInput, Prisma.ReportCategoryUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ReportCategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateManyMutationInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const ReportCategoryUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateManyMutationInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
