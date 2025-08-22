import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCategoryScalarWhereInputObjectSchema } from './ReportCategoryScalarWhereInput.schema';
import { ReportCategoryUpdateManyMutationInputObjectSchema } from './ReportCategoryUpdateManyMutationInput.schema';
import { ReportCategoryUncheckedUpdateManyWithoutParentInputObjectSchema } from './ReportCategoryUncheckedUpdateManyWithoutParentInput.schema'

export const ReportCategoryUpdateManyWithWhereWithoutParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateManyWithWhereWithoutParentInput, Prisma.ReportCategoryUpdateManyWithWhereWithoutParentInput> = z.object({
  where: z.lazy(() => ReportCategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateManyMutationInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutParentInputObjectSchema)])
}).strict();
export const ReportCategoryUpdateManyWithWhereWithoutParentInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportCategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportCategoryUpdateManyMutationInputObjectSchema), z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutParentInputObjectSchema)])
}).strict();
