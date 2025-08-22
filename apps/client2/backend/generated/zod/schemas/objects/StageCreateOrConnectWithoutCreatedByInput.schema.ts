import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageCreateWithoutCreatedByInputObjectSchema } from './StageCreateWithoutCreatedByInput.schema';
import { StageUncheckedCreateWithoutCreatedByInputObjectSchema } from './StageUncheckedCreateWithoutCreatedByInput.schema'

export const StageCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StageCreateOrConnectWithoutCreatedByInput, Prisma.StageCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const StageCreateOrConnectWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
