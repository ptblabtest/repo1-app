import { z } from 'zod';
import { ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportCreateInputObjectSchema } from './objects/ReportCreateInput.schema';
import { ReportUncheckedCreateInputObjectSchema } from './objects/ReportUncheckedCreateInput.schema';
import { ReportUpdateInputObjectSchema } from './objects/ReportUpdateInput.schema';
import { ReportUncheckedUpdateInputObjectSchema } from './objects/ReportUncheckedUpdateInput.schema'

export const ReportUpsertSchema = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), where: ReportWhereUniqueInputObjectSchema, create: z.union([ ReportCreateInputObjectSchema, ReportUncheckedCreateInputObjectSchema ]), update: z.union([ ReportUpdateInputObjectSchema, ReportUncheckedUpdateInputObjectSchema ])  })