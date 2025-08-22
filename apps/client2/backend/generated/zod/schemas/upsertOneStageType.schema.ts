import { z } from 'zod';
import { StageTypeSelectObjectSchema } from './objects/StageTypeSelect.schema';
import { StageTypeIncludeObjectSchema } from './objects/StageTypeInclude.schema';
import { StageTypeWhereUniqueInputObjectSchema } from './objects/StageTypeWhereUniqueInput.schema';
import { StageTypeCreateInputObjectSchema } from './objects/StageTypeCreateInput.schema';
import { StageTypeUncheckedCreateInputObjectSchema } from './objects/StageTypeUncheckedCreateInput.schema';
import { StageTypeUpdateInputObjectSchema } from './objects/StageTypeUpdateInput.schema';
import { StageTypeUncheckedUpdateInputObjectSchema } from './objects/StageTypeUncheckedUpdateInput.schema'

export const StageTypeUpsertSchema = z.object({ select: StageTypeSelectObjectSchema.optional(), include: StageTypeIncludeObjectSchema.optional(), where: StageTypeWhereUniqueInputObjectSchema, create: z.union([ StageTypeCreateInputObjectSchema, StageTypeUncheckedCreateInputObjectSchema ]), update: z.union([ StageTypeUpdateInputObjectSchema, StageTypeUncheckedUpdateInputObjectSchema ])  })