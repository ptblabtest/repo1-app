import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageCreateWithoutTypeInputObjectSchema } from './StageCreateWithoutTypeInput.schema';
import { StageUncheckedCreateWithoutTypeInputObjectSchema } from './StageUncheckedCreateWithoutTypeInput.schema'

export const StageCreateOrConnectWithoutTypeInputObjectSchema: z.ZodType<Prisma.StageCreateOrConnectWithoutTypeInput, Prisma.StageCreateOrConnectWithoutTypeInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageCreateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema)])
}).strict();
export const StageCreateOrConnectWithoutTypeInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageCreateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema)])
}).strict();
