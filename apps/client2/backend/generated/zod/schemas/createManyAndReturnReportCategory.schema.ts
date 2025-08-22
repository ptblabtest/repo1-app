import { z } from 'zod';
import { ReportCategorySelectObjectSchema } from './objects/ReportCategorySelect.schema';
import { ReportCategoryCreateManyInputObjectSchema } from './objects/ReportCategoryCreateManyInput.schema'

export const ReportCategoryCreateManyAndReturnSchema = z.object({ select: ReportCategorySelectObjectSchema.optional(), data: z.union([ ReportCategoryCreateManyInputObjectSchema, z.array(ReportCategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()