import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema';
import { StageCreateWithoutUpdatedByInputObjectSchema } from './StageCreateWithoutUpdatedByInput.schema';
import { StageUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StageUncheckedCreateWithoutUpdatedByInput.schema'

export const StageCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.StageCreateOrConnectWithoutUpdatedByInput, Prisma.StageCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const StageCreateOrConnectWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => StageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
