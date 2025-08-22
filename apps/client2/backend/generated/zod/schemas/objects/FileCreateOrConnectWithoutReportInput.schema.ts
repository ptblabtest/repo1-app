import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutReportInputObjectSchema } from './FileCreateWithoutReportInput.schema';
import { FileUncheckedCreateWithoutReportInputObjectSchema } from './FileUncheckedCreateWithoutReportInput.schema'

export const FileCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutReportInput, Prisma.FileCreateOrConnectWithoutReportInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
