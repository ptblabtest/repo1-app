import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeWhereUniqueInputObjectSchema } from './StageTypeWhereUniqueInput.schema';
import { StageTypeCreateWithoutStagesInputObjectSchema } from './StageTypeCreateWithoutStagesInput.schema';
import { StageTypeUncheckedCreateWithoutStagesInputObjectSchema } from './StageTypeUncheckedCreateWithoutStagesInput.schema'

export const StageTypeCreateOrConnectWithoutStagesInputObjectSchema: z.ZodType<Prisma.StageTypeCreateOrConnectWithoutStagesInput, Prisma.StageTypeCreateOrConnectWithoutStagesInput> = z.object({
  where: z.lazy(() => StageTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageTypeCreateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedCreateWithoutStagesInputObjectSchema)])
}).strict();
export const StageTypeCreateOrConnectWithoutStagesInputObjectZodSchema = z.object({
  where: z.lazy(() => StageTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageTypeCreateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedCreateWithoutStagesInputObjectSchema)])
}).strict();
