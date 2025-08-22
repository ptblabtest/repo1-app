import { z } from 'zod';
import { StageSelectObjectSchema } from './objects/StageSelect.schema';
import { StageIncludeObjectSchema } from './objects/StageInclude.schema';
import { StageWhereUniqueInputObjectSchema } from './objects/StageWhereUniqueInput.schema';
import { StageCreateInputObjectSchema } from './objects/StageCreateInput.schema';
import { StageUncheckedCreateInputObjectSchema } from './objects/StageUncheckedCreateInput.schema';
import { StageUpdateInputObjectSchema } from './objects/StageUpdateInput.schema';
import { StageUncheckedUpdateInputObjectSchema } from './objects/StageUncheckedUpdateInput.schema'

export const StageUpsertSchema = z.object({ select: StageSelectObjectSchema.optional(), include: StageIncludeObjectSchema.optional(), where: StageWhereUniqueInputObjectSchema, create: z.union([ StageCreateInputObjectSchema, StageUncheckedCreateInputObjectSchema ]), update: z.union([ StageUpdateInputObjectSchema, StageUncheckedUpdateInputObjectSchema ])  })