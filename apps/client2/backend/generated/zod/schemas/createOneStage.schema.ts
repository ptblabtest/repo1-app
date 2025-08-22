import { z } from 'zod';
import { StageSelectObjectSchema } from './objects/StageSelect.schema';
import { StageIncludeObjectSchema } from './objects/StageInclude.schema';
import { StageCreateInputObjectSchema } from './objects/StageCreateInput.schema';
import { StageUncheckedCreateInputObjectSchema } from './objects/StageUncheckedCreateInput.schema'

export const StageCreateOneSchema = z.object({ select: StageSelectObjectSchema.optional(), include: StageIncludeObjectSchema.optional(), data: z.union([StageCreateInputObjectSchema, StageUncheckedCreateInputObjectSchema])  })