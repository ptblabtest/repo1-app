import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutNotesInputObjectSchema } from './ReportCreateWithoutNotesInput.schema';
import { ReportUncheckedCreateWithoutNotesInputObjectSchema } from './ReportUncheckedCreateWithoutNotesInput.schema';
import { ReportCreateOrConnectWithoutNotesInputObjectSchema } from './ReportCreateOrConnectWithoutNotesInput.schema';
import { ReportUpsertWithoutNotesInputObjectSchema } from './ReportUpsertWithoutNotesInput.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateToOneWithWhereWithoutNotesInputObjectSchema } from './ReportUpdateToOneWithWhereWithoutNotesInput.schema';
import { ReportUpdateWithoutNotesInputObjectSchema } from './ReportUpdateWithoutNotesInput.schema';
import { ReportUncheckedUpdateWithoutNotesInputObjectSchema } from './ReportUncheckedUpdateWithoutNotesInput.schema'

export const ReportUpdateOneWithoutNotesNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateOneWithoutNotesNestedInput, Prisma.ReportUpdateOneWithoutNotesNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutNotesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutNotesInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutNotesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportUpdateToOneWithWhereWithoutNotesInputObjectSchema), z.lazy(() => ReportUpdateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutNotesInputObjectSchema)]).optional()
}).strict();
export const ReportUpdateOneWithoutNotesNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutNotesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutNotesInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutNotesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportUpdateToOneWithWhereWithoutNotesInputObjectSchema), z.lazy(() => ReportUpdateWithoutNotesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutNotesInputObjectSchema)]).optional()
}).strict();
