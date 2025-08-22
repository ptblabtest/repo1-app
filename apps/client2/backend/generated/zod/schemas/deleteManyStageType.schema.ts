import { z } from 'zod';
import { StageTypeWhereInputObjectSchema } from './objects/StageTypeWhereInput.schema'

export const StageTypeDeleteManySchema = z.object({ where: StageTypeWhereInputObjectSchema.optional()  })