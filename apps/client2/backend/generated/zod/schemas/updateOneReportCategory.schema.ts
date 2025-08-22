import { z } from 'zod';
import { ReportCategorySelectObjectSchema } from './objects/ReportCategorySelect.schema';
import { ReportCategoryIncludeObjectSchema } from './objects/ReportCategoryInclude.schema';
import { ReportCategoryUpdateInputObjectSchema } from './objects/ReportCategoryUpdateInput.schema';
import { ReportCategoryUncheckedUpdateInputObjectSchema } from './objects/ReportCategoryUncheckedUpdateInput.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './objects/ReportCategoryWhereUniqueInput.schema'

export const ReportCategoryUpdateOneSchema = z.object({ select: ReportCategorySelectObjectSchema.optional(), include: ReportCategoryIncludeObjectSchema.optional(), data: z.union([ReportCategoryUpdateInputObjectSchema, ReportCategoryUncheckedUpdateInputObjectSchema]), where: ReportCategoryWhereUniqueInputObjectSchema  })