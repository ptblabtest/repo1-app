import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeUpdateWithoutStagesInputObjectSchema } from './StageTypeUpdateWithoutStagesInput.schema';
import { StageTypeUncheckedUpdateWithoutStagesInputObjectSchema } from './StageTypeUncheckedUpdateWithoutStagesInput.schema';
import { StageTypeCreateWithoutStagesInputObjectSchema } from './StageTypeCreateWithoutStagesInput.schema';
import { StageTypeUncheckedCreateWithoutStagesInputObjectSchema } from './StageTypeUncheckedCreateWithoutStagesInput.schema';
import { StageTypeWhereInputObjectSchema } from './StageTypeWhereInput.schema'

export const StageTypeUpsertWithoutStagesInputObjectSchema: z.ZodType<Prisma.StageTypeUpsertWithoutStagesInput, Prisma.StageTypeUpsertWithoutStagesInput> = z.object({
  update: z.union([z.lazy(() => StageTypeUpdateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedUpdateWithoutStagesInputObjectSchema)]),
  create: z.union([z.lazy(() => StageTypeCreateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedCreateWithoutStagesInputObjectSchema)]),
  where: z.lazy(() => StageTypeWhereInputObjectSchema).optional()
}).strict();
export const StageTypeUpsertWithoutStagesInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => StageTypeUpdateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedUpdateWithoutStagesInputObjectSchema)]),
  create: z.union([z.lazy(() => StageTypeCreateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedCreateWithoutStagesInputObjectSchema)]),
  where: z.lazy(() => StageTypeWhereInputObjectSchema).optional()
}).strict();
