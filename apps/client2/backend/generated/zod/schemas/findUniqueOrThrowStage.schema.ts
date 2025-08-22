import { z } from 'zod';
import { StageSelectObjectSchema } from './objects/StageSelect.schema';
import { StageIncludeObjectSchema } from './objects/StageInclude.schema';
import { StageWhereUniqueInputObjectSchema } from './objects/StageWhereUniqueInput.schema'

export const StageFindUniqueOrThrowSchema = z.object({ select: StageSelectObjectSchema.optional(), include: StageIncludeObjectSchema.optional(), where: StageWhereUniqueInputObjectSchema })