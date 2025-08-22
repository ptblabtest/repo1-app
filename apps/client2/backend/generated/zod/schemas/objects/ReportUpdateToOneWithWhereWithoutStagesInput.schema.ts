import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema';
import { ReportUpdateWithoutStagesInputObjectSchema } from './ReportUpdateWithoutStagesInput.schema';
import { ReportUncheckedUpdateWithoutStagesInputObjectSchema } from './ReportUncheckedUpdateWithoutStagesInput.schema'

export const ReportUpdateToOneWithWhereWithoutStagesInputObjectSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutStagesInput, Prisma.ReportUpdateToOneWithWhereWithoutStagesInput> = z.object({
  where: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportUpdateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutStagesInputObjectSchema)])
}).strict();
export const ReportUpdateToOneWithWhereWithoutStagesInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportUpdateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutStagesInputObjectSchema)])
}).strict();
