import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutStagesInputObjectSchema } from './ReportCreateWithoutStagesInput.schema';
import { ReportUncheckedCreateWithoutStagesInputObjectSchema } from './ReportUncheckedCreateWithoutStagesInput.schema';
import { ReportCreateOrConnectWithoutStagesInputObjectSchema } from './ReportCreateOrConnectWithoutStagesInput.schema';
import { ReportUpsertWithoutStagesInputObjectSchema } from './ReportUpsertWithoutStagesInput.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateToOneWithWhereWithoutStagesInputObjectSchema } from './ReportUpdateToOneWithWhereWithoutStagesInput.schema';
import { ReportUpdateWithoutStagesInputObjectSchema } from './ReportUpdateWithoutStagesInput.schema';
import { ReportUncheckedUpdateWithoutStagesInputObjectSchema } from './ReportUncheckedUpdateWithoutStagesInput.schema'

export const ReportUpdateOneWithoutStagesNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateOneWithoutStagesNestedInput, Prisma.ReportUpdateOneWithoutStagesNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutStagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutStagesInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutStagesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportUpdateToOneWithWhereWithoutStagesInputObjectSchema), z.lazy(() => ReportUpdateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutStagesInputObjectSchema)]).optional()
}).strict();
export const ReportUpdateOneWithoutStagesNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutStagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutStagesInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutStagesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportUpdateToOneWithWhereWithoutStagesInputObjectSchema), z.lazy(() => ReportUpdateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutStagesInputObjectSchema)]).optional()
}).strict();
