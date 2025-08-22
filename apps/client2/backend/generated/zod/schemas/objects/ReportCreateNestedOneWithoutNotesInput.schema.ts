import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutNotesInputObjectSchema } from './ReportCreateWithoutNotesInput.schema';
import { ReportUncheckedCreateWithoutNotesInputObjectSchema } from './ReportUncheckedCreateWithoutNotesInput.schema';
import { ReportCreateOrConnectWithoutNotesInputObjectSchema } from './ReportCreateOrConnectWithoutNotesInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

export const ReportCreateNestedOneWithoutNotesInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutNotesInput, Prisma.ReportCreateNestedOneWithoutNotesInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutNotesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutNotesInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportCreateNestedOneWithoutNotesInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutNotesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutNotesInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional()
}).strict();
