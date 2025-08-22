import { z } from 'zod';
import { StageTypeSelectObjectSchema } from './objects/StageTypeSelect.schema';
import { StageTypeCreateManyInputObjectSchema } from './objects/StageTypeCreateManyInput.schema'

export const StageTypeCreateManyAndReturnSchema = z.object({ select: StageTypeSelectObjectSchema.optional(), data: z.union([ StageTypeCreateManyInputObjectSchema, z.array(StageTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()