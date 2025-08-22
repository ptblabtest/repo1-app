import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutStagesInputObjectSchema } from './ReportCreateWithoutStagesInput.schema';
import { ReportUncheckedCreateWithoutStagesInputObjectSchema } from './ReportUncheckedCreateWithoutStagesInput.schema';
import { ReportCreateOrConnectWithoutStagesInputObjectSchema } from './ReportCreateOrConnectWithoutStagesInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

export const ReportCreateNestedOneWithoutStagesInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutStagesInput, Prisma.ReportCreateNestedOneWithoutStagesInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutStagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutStagesInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportCreateNestedOneWithoutStagesInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutStagesInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutStagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutStagesInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional()
}).strict();
