import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutUpdatedByInputObjectSchema } from './ReportCreateWithoutUpdatedByInput.schema';
import { ReportUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReportUncheckedCreateWithoutUpdatedByInput.schema';
import { ReportCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ReportCreateOrConnectWithoutUpdatedByInput.schema';
import { ReportCreateManyUpdatedByInputEnvelopeObjectSchema } from './ReportCreateManyUpdatedByInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

export const ReportCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutUpdatedByInput, Prisma.ReportCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutUpdatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
