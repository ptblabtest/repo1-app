import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutFilesInputObjectSchema } from './ReportCreateWithoutFilesInput.schema';
import { ReportUncheckedCreateWithoutFilesInputObjectSchema } from './ReportUncheckedCreateWithoutFilesInput.schema';
import { ReportCreateOrConnectWithoutFilesInputObjectSchema } from './ReportCreateOrConnectWithoutFilesInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

export const ReportCreateNestedOneWithoutFilesInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutFilesInput, Prisma.ReportCreateNestedOneWithoutFilesInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportCreateNestedOneWithoutFilesInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional()
}).strict();
