import { z } from 'zod';
import { ReportCategoryUpdateManyMutationInputObjectSchema } from './objects/ReportCategoryUpdateManyMutationInput.schema';
import { ReportCategoryWhereInputObjectSchema } from './objects/ReportCategoryWhereInput.schema'

export const ReportCategoryUpdateManySchema = z.object({ data: ReportCategoryUpdateManyMutationInputObjectSchema, where: ReportCategoryWhereInputObjectSchema.optional()  })