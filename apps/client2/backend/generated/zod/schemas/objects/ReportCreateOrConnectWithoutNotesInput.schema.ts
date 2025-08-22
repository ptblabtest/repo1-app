import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutNotesInputObjectSchema } from './ReportCreateWithoutNotesInput.schema';
import { ReportUncheckedCreateWithoutNotesInputObjectSchema } from './ReportUncheckedCreateWithoutNotesInput.schema'

export const ReportCreateOrConnectWithoutNotesInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutNotesInput, Prisma.ReportCreateOrConnectWithoutNotesInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutNotesInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutNotesInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutNotesInputObjectSchema)])
}).strict();
