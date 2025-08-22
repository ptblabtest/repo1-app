import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutFilesInputObjectSchema } from './ReportCreateWithoutFilesInput.schema';
import { ReportUncheckedCreateWithoutFilesInputObjectSchema } from './ReportUncheckedCreateWithoutFilesInput.schema';
import { ReportCreateOrConnectWithoutFilesInputObjectSchema } from './ReportCreateOrConnectWithoutFilesInput.schema';
import { ReportUpsertWithoutFilesInputObjectSchema } from './ReportUpsertWithoutFilesInput.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateToOneWithWhereWithoutFilesInputObjectSchema } from './ReportUpdateToOneWithWhereWithoutFilesInput.schema';
import { ReportUpdateWithoutFilesInputObjectSchema } from './ReportUpdateWithoutFilesInput.schema';
import { ReportUncheckedUpdateWithoutFilesInputObjectSchema } from './ReportUncheckedUpdateWithoutFilesInput.schema'

export const ReportUpdateOneWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateOneWithoutFilesNestedInput, Prisma.ReportUpdateOneWithoutFilesNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutFilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportUpdateToOneWithWhereWithoutFilesInputObjectSchema), z.lazy(() => ReportUpdateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutFilesInputObjectSchema)]).optional()
}).strict();
export const ReportUpdateOneWithoutFilesNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutFilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportUpdateToOneWithWhereWithoutFilesInputObjectSchema), z.lazy(() => ReportUpdateWithoutFilesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutFilesInputObjectSchema)]).optional()
}).strict();
