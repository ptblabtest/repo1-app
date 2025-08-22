import { z } from 'zod';
import { StageTypeSelectObjectSchema } from './objects/StageTypeSelect.schema';
import { StageTypeUpdateManyMutationInputObjectSchema } from './objects/StageTypeUpdateManyMutationInput.schema';
import { StageTypeWhereInputObjectSchema } from './objects/StageTypeWhereInput.schema'

export const StageTypeUpdateManyAndReturnSchema = z.object({ select: StageTypeSelectObjectSchema.optional(), data: StageTypeUpdateManyMutationInputObjectSchema, where: StageTypeWhereInputObjectSchema.optional()  }).strict()