import { z } from 'zod';
import { ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportCreateInputObjectSchema } from './objects/ReportCreateInput.schema';
import { ReportUncheckedCreateInputObjectSchema } from './objects/ReportUncheckedCreateInput.schema'

export const ReportCreateOneSchema = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), data: z.union([ReportCreateInputObjectSchema, ReportUncheckedCreateInputObjectSchema])  })