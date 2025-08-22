import { z } from 'zod';
import { StageSelectObjectSchema } from './objects/StageSelect.schema';
import { StageIncludeObjectSchema } from './objects/StageInclude.schema';
import { StageUpdateInputObjectSchema } from './objects/StageUpdateInput.schema';
import { StageUncheckedUpdateInputObjectSchema } from './objects/StageUncheckedUpdateInput.schema';
import { StageWhereUniqueInputObjectSchema } from './objects/StageWhereUniqueInput.schema'

export const StageUpdateOneSchema = z.object({ select: StageSelectObjectSchema.optional(), include: StageIncludeObjectSchema.optional(), data: z.union([StageUpdateInputObjectSchema, StageUncheckedUpdateInputObjectSchema]), where: StageWhereUniqueInputObjectSchema  })