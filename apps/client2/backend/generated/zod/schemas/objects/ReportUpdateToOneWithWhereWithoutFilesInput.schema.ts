import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema';
import { ReportUpdateWithoutFilesInputObjectSchema } from './ReportUpdateWithoutFilesInput.schema';
import { ReportUncheckedUpdateWithoutFilesInputObjectSchema } from './ReportUncheckedUpdateWithoutFilesInput.schema'

export const ReportUpdateToOneWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutFilesInput, Prisma.ReportUpdateToOneWithWhereWithoutFilesInput> = z.object({
  where: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportUpdateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const ReportUpdateToOneWithWhereWithoutFilesInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportUpdateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
