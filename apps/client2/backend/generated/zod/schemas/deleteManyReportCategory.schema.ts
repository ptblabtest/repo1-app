import { z } from 'zod';
import { ReportCategoryWhereInputObjectSchema } from './objects/ReportCategoryWhereInput.schema'

export const ReportCategoryDeleteManySchema = z.object({ where: ReportCategoryWhereInputObjectSchema.optional()  })