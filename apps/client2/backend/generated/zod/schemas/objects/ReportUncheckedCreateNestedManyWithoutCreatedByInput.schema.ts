import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutCreatedByInputObjectSchema } from './ReportCreateWithoutCreatedByInput.schema';
import { ReportUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReportUncheckedCreateWithoutCreatedByInput.schema';
import { ReportCreateOrConnectWithoutCreatedByInputObjectSchema } from './ReportCreateOrConnectWithoutCreatedByInput.schema';
import { ReportCreateManyCreatedByInputEnvelopeObjectSchema } from './ReportCreateManyCreatedByInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

export const ReportUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutCreatedByInput, Prisma.ReportUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
