import { z } from 'zod';
import { StageTypeUpdateManyMutationInputObjectSchema } from './objects/StageTypeUpdateManyMutationInput.schema';
import { StageTypeWhereInputObjectSchema } from './objects/StageTypeWhereInput.schema'

export const StageTypeUpdateManySchema = z.object({ data: StageTypeUpdateManyMutationInputObjectSchema, where: StageTypeWhereInputObjectSchema.optional()  })