import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutUpdatedByInputObjectSchema } from './ReportUpdateWithoutUpdatedByInput.schema';
import { ReportUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ReportUncheckedUpdateWithoutUpdatedByInput.schema'

export const ReportUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutUpdatedByInput, Prisma.ReportUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
