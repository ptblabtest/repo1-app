import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageScalarWhereInputObjectSchema } from './StageScalarWhereInput.schema';
import { StageUpdateManyMutationInputObjectSchema } from './StageUpdateManyMutationInput.schema';
import { StageUncheckedUpdateManyWithoutTypeInputObjectSchema } from './StageUncheckedUpdateManyWithoutTypeInput.schema'

export const StageUpdateManyWithWhereWithoutTypeInputObjectSchema: z.ZodType<Prisma.StageUpdateManyWithWhereWithoutTypeInput, Prisma.StageUpdateManyWithWhereWithoutTypeInput> = z.object({
  where: z.lazy(() => StageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateManyMutationInputObjectSchema), z.lazy(() => StageUncheckedUpdateManyWithoutTypeInputObjectSchema)])
}).strict();
export const StageUpdateManyWithWhereWithoutTypeInputObjectZodSchema = z.object({
  where: z.lazy(() => StageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateManyMutationInputObjectSchema), z.lazy(() => StageUncheckedUpdateManyWithoutTypeInputObjectSchema)])
}).strict();
