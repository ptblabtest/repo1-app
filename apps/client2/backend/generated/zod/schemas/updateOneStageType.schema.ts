import { z } from 'zod';
import { StageTypeSelectObjectSchema } from './objects/StageTypeSelect.schema';
import { StageTypeIncludeObjectSchema } from './objects/StageTypeInclude.schema';
import { StageTypeUpdateInputObjectSchema } from './objects/StageTypeUpdateInput.schema';
import { StageTypeUncheckedUpdateInputObjectSchema } from './objects/StageTypeUncheckedUpdateInput.schema';
import { StageTypeWhereUniqueInputObjectSchema } from './objects/StageTypeWhereUniqueInput.schema'

export const StageTypeUpdateOneSchema = z.object({ select: StageTypeSelectObjectSchema.optional(), include: StageTypeIncludeObjectSchema.optional(), data: z.union([StageTypeUpdateInputObjectSchema, StageTypeUncheckedUpdateInputObjectSchema]), where: StageTypeWhereUniqueInputObjectSchema  })