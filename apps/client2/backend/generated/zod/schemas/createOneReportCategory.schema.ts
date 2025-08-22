import { z } from 'zod';
import { ReportCategorySelectObjectSchema } from './objects/ReportCategorySelect.schema';
import { ReportCategoryIncludeObjectSchema } from './objects/ReportCategoryInclude.schema';
import { ReportCategoryCreateInputObjectSchema } from './objects/ReportCategoryCreateInput.schema';
import { ReportCategoryUncheckedCreateInputObjectSchema } from './objects/ReportCategoryUncheckedCreateInput.schema'

export const ReportCategoryCreateOneSchema = z.object({ select: ReportCategorySelectObjectSchema.optional(), include: ReportCategoryIncludeObjectSchema.optional(), data: z.union([ReportCategoryCreateInputObjectSchema, ReportCategoryUncheckedCreateInputObjectSchema])  })