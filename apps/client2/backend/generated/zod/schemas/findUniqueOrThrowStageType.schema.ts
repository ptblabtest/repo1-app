import { z } from 'zod';
import { StageTypeSelectObjectSchema } from './objects/StageTypeSelect.schema';
import { StageTypeIncludeObjectSchema } from './objects/StageTypeInclude.schema';
import { StageTypeWhereUniqueInputObjectSchema } from './objects/StageTypeWhereUniqueInput.schema'

export const StageTypeFindUniqueOrThrowSchema = z.object({ select: StageTypeSelectObjectSchema.optional(), include: StageTypeIncludeObjectSchema.optional(), where: StageTypeWhereUniqueInputObjectSchema })