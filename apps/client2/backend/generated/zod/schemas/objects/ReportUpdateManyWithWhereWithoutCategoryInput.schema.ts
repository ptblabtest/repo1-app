import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCategoryInput.schema'

export const ReportUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCategoryInput, Prisma.ReportUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCategoryInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutCategoryInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCategoryInputObjectSchema)])
}).strict();
