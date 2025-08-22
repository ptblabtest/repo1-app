import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportUpdateWithoutFilesInputObjectSchema } from './ReportUpdateWithoutFilesInput.schema';
import { ReportUncheckedUpdateWithoutFilesInputObjectSchema } from './ReportUncheckedUpdateWithoutFilesInput.schema';
import { ReportCreateWithoutFilesInputObjectSchema } from './ReportCreateWithoutFilesInput.schema';
import { ReportUncheckedCreateWithoutFilesInputObjectSchema } from './ReportUncheckedCreateWithoutFilesInput.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

export const ReportUpsertWithoutFilesInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithoutFilesInput, Prisma.ReportUpsertWithoutFilesInput> = z.object({
  update: z.union([z.lazy(() => ReportUpdateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutFilesInputObjectSchema)]),
  where: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
export const ReportUpsertWithoutFilesInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => ReportUpdateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutFilesInputObjectSchema)]),
  where: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
