import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageScalarWhereInputObjectSchema } from './StageScalarWhereInput.schema';
import { StageUpdateManyMutationInputObjectSchema } from './StageUpdateManyMutationInput.schema';
import { StageUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './StageUncheckedUpdateManyWithoutUpdatedByInput.schema'

export const StageUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.StageUpdateManyWithWhereWithoutUpdatedByInput, Prisma.StageUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => StageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateManyMutationInputObjectSchema), z.lazy(() => StageUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const StageUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => StageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateManyMutationInputObjectSchema), z.lazy(() => StageUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
