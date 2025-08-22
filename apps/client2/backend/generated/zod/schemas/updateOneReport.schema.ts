import { z } from 'zod';
import { ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportUpdateInputObjectSchema } from './objects/ReportUpdateInput.schema';
import { ReportUncheckedUpdateInputObjectSchema } from './objects/ReportUncheckedUpdateInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema'

export const ReportUpdateOneSchema = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), data: z.union([ReportUpdateInputObjectSchema, ReportUncheckedUpdateInputObjectSchema]), where: ReportWhereUniqueInputObjectSchema  })