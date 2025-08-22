import { z } from 'zod';
import { ReportCategorySelectObjectSchema } from './objects/ReportCategorySelect.schema';
import { ReportCategoryIncludeObjectSchema } from './objects/ReportCategoryInclude.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './objects/ReportCategoryWhereUniqueInput.schema'

export const ReportCategoryFindUniqueSchema = z.object({ select: ReportCategorySelectObjectSchema.optional(), include: ReportCategoryIncludeObjectSchema.optional(), where: ReportCategoryWhereUniqueInputObjectSchema })