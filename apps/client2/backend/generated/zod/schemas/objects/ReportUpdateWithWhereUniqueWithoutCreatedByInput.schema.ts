import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCreatedByInputObjectSchema } from './ReportUpdateWithoutCreatedByInput.schema';
import { ReportUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ReportUncheckedUpdateWithoutCreatedByInput.schema'

export const ReportUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCreatedByInput, Prisma.ReportUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
