import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCreatedByInput.schema'

export const ReportUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCreatedByInput, Prisma.ReportUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
