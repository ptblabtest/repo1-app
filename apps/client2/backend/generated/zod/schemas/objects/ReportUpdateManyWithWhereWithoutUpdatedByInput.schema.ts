import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './ReportUncheckedUpdateManyWithoutUpdatedByInput.schema'

export const ReportUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutUpdatedByInput, Prisma.ReportUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
