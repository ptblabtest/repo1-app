import { z } from 'zod';
import { ReportCategorySelectObjectSchema } from './objects/ReportCategorySelect.schema';
import { ReportCategoryUpdateManyMutationInputObjectSchema } from './objects/ReportCategoryUpdateManyMutationInput.schema';
import { ReportCategoryWhereInputObjectSchema } from './objects/ReportCategoryWhereInput.schema'

export const ReportCategoryUpdateManyAndReturnSchema = z.object({ select: ReportCategorySelectObjectSchema.optional(), data: ReportCategoryUpdateManyMutationInputObjectSchema, where: ReportCategoryWhereInputObjectSchema.optional()  }).strict()