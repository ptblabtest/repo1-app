import { z } from 'zod';
import { ReportCategoryCreateManyInputObjectSchema } from './objects/ReportCategoryCreateManyInput.schema'

export const ReportCategoryCreateManySchema = z.object({ data: z.union([ ReportCategoryCreateManyInputObjectSchema, z.array(ReportCategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })