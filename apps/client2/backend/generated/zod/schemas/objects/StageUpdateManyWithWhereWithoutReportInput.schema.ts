import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageScalarWhereInputObjectSchema } from './StageScalarWhereInput.schema';
import { StageUpdateManyMutationInputObjectSchema } from './StageUpdateManyMutationInput.schema';
import { StageUncheckedUpdateManyWithoutReportInputObjectSchema } from './StageUncheckedUpdateManyWithoutReportInput.schema'

export const StageUpdateManyWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.StageUpdateManyWithWhereWithoutReportInput, Prisma.StageUpdateManyWithWhereWithoutReportInput> = z.object({
  where: z.lazy(() => StageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateManyMutationInputObjectSchema), z.lazy(() => StageUncheckedUpdateManyWithoutReportInputObjectSchema)])
}).strict();
export const StageUpdateManyWithWhereWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => StageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StageUpdateManyMutationInputObjectSchema), z.lazy(() => StageUncheckedUpdateManyWithoutReportInputObjectSchema)])
}).strict();
