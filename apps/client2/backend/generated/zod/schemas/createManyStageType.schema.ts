import { z } from 'zod';
import { StageTypeCreateManyInputObjectSchema } from './objects/StageTypeCreateManyInput.schema'

export const StageTypeCreateManySchema = z.object({ data: z.union([ StageTypeCreateManyInputObjectSchema, z.array(StageTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })