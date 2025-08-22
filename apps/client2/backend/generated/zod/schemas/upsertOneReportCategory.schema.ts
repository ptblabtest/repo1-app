import { z } from 'zod';
import { ReportCategorySelectObjectSchema } from './objects/ReportCategorySelect.schema';
import { ReportCategoryIncludeObjectSchema } from './objects/ReportCategoryInclude.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './objects/ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryCreateInputObjectSchema } from './objects/ReportCategoryCreateInput.schema';
import { ReportCategoryUncheckedCreateInputObjectSchema } from './objects/ReportCategoryUncheckedCreateInput.schema';
import { ReportCategoryUpdateInputObjectSchema } from './objects/ReportCategoryUpdateInput.schema';
import { ReportCategoryUncheckedUpdateInputObjectSchema } from './objects/ReportCategoryUncheckedUpdateInput.schema'

export const ReportCategoryUpsertSchema = z.object({ select: ReportCategorySelectObjectSchema.optional(), include: ReportCategoryIncludeObjectSchema.optional(), where: ReportCategoryWhereUniqueInputObjectSchema, create: z.union([ ReportCategoryCreateInputObjectSchema, ReportCategoryUncheckedCreateInputObjectSchema ]), update: z.union([ ReportCategoryUpdateInputObjectSchema, ReportCategoryUncheckedUpdateInputObjectSchema ])  })