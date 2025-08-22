import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportUpdateWithoutStagesInputObjectSchema } from './ReportUpdateWithoutStagesInput.schema';
import { ReportUncheckedUpdateWithoutStagesInputObjectSchema } from './ReportUncheckedUpdateWithoutStagesInput.schema';
import { ReportCreateWithoutStagesInputObjectSchema } from './ReportCreateWithoutStagesInput.schema';
import { ReportUncheckedCreateWithoutStagesInputObjectSchema } from './ReportUncheckedCreateWithoutStagesInput.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

export const ReportUpsertWithoutStagesInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithoutStagesInput, Prisma.ReportUpsertWithoutStagesInput> = z.object({
  update: z.union([z.lazy(() => ReportUpdateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutStagesInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutStagesInputObjectSchema)]),
  where: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
export const ReportUpsertWithoutStagesInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => ReportUpdateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutStagesInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutStagesInputObjectSchema)]),
  where: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
