import { z } from 'zod';
import { StageTypeSelectObjectSchema } from './objects/StageTypeSelect.schema';
import { StageTypeIncludeObjectSchema } from './objects/StageTypeInclude.schema';
import { StageTypeCreateInputObjectSchema } from './objects/StageTypeCreateInput.schema';
import { StageTypeUncheckedCreateInputObjectSchema } from './objects/StageTypeUncheckedCreateInput.schema'

export const StageTypeCreateOneSchema = z.object({ select: StageTypeSelectObjectSchema.optional(), include: StageTypeIncludeObjectSchema.optional(), data: z.union([StageTypeCreateInputObjectSchema, StageTypeUncheckedCreateInputObjectSchema])  })