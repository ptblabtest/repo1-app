import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutReportInputObjectSchema } from './FileUpdateWithoutReportInput.schema';
import { FileUncheckedUpdateWithoutReportInputObjectSchema } from './FileUncheckedUpdateWithoutReportInput.schema';
import { FileCreateWithoutReportInputObjectSchema } from './FileCreateWithoutReportInput.schema';
import { FileUncheckedCreateWithoutReportInputObjectSchema } from './FileUncheckedCreateWithoutReportInput.schema'

export const FileUpsertWithWhereUniqueWithoutReportInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutReportInput, Prisma.FileUpsertWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
