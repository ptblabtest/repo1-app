import { z } from 'zod';
import { ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportCreateManyInputObjectSchema } from './objects/ReportCreateManyInput.schema'

export const ReportCreateManyAndReturnSchema = z.object({ select: ReportSelectObjectSchema.optional(), data: z.union([ ReportCreateManyInputObjectSchema, z.array(ReportCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()