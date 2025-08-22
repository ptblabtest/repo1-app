import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutReportInputObjectSchema } from './FileUpdateWithoutReportInput.schema';
import { FileUncheckedUpdateWithoutReportInputObjectSchema } from './FileUncheckedUpdateWithoutReportInput.schema'

export const FileUpdateWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutReportInput, Prisma.FileUpdateWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
