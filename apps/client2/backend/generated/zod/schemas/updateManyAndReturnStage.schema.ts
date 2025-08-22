import { z } from 'zod';
import { StageSelectObjectSchema } from './objects/StageSelect.schema';
import { StageUpdateManyMutationInputObjectSchema } from './objects/StageUpdateManyMutationInput.schema';
import { StageWhereInputObjectSchema } from './objects/StageWhereInput.schema'

export const StageUpdateManyAndReturnSchema = z.object({ select: StageSelectObjectSchema.optional(), data: StageUpdateManyMutationInputObjectSchema, where: StageWhereInputObjectSchema.optional()  }).strict()