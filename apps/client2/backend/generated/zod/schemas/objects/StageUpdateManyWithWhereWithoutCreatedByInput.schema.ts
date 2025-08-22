import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageScalarWhereInputObjectSchema } from './StageScalarWhereInput.schema';
import { StageUpdateManyMutationInputObjectSchema } from './StageUpdateManyMutationInput.schema';
import { StageUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './StageUncheckedUpdateManyWithoutCreatedByInput.schema'

export const StageUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StageUpdateManyWithWhereWithoutCreatedByInput, Prisma.StageUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => StageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateManyMutationInputObjectSchema), z.lazy(() => StageUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const StageUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => StageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateManyMutationInputObjectSchema), z.lazy(() => StageUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
