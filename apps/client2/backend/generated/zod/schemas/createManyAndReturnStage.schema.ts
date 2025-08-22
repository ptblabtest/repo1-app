import { z } from 'zod';
import { StageSelectObjectSchema } from './objects/StageSelect.schema';
import { StageCreateManyInputObjectSchema } from './objects/StageCreateManyInput.schema'

export const StageCreateManyAndReturnSchema = z.object({ select: StageSelectObjectSchema.optional(), data: z.union([ StageCreateManyInputObjectSchema, z.array(StageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()