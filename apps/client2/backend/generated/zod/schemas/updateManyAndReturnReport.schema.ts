import { z } from 'zod';
import { ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './objects/ReportUpdateManyMutationInput.schema';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema'

export const ReportUpdateManyAndReturnSchema = z.object({ select: ReportSelectObjectSchema.optional(), data: ReportUpdateManyMutationInputObjectSchema, where: ReportWhereInputObjectSchema.optional()  }).strict()