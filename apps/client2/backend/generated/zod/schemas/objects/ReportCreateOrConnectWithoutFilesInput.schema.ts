import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutFilesInputObjectSchema } from './ReportCreateWithoutFilesInput.schema';
import { ReportUncheckedCreateWithoutFilesInputObjectSchema } from './ReportUncheckedCreateWithoutFilesInput.schema'

export const ReportCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutFilesInput, Prisma.ReportCreateOrConnectWithoutFilesInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutFilesInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
