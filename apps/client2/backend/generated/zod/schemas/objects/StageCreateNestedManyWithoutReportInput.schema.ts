import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateWithoutReportInputObjectSchema } from './StageCreateWithoutReportInput.schema';
import { StageUncheckedCreateWithoutReportInputObjectSchema } from './StageUncheckedCreateWithoutReportInput.schema';
import { StageCreateOrConnectWithoutReportInputObjectSchema } from './StageCreateOrConnectWithoutReportInput.schema';
import { StageCreateManyReportInputEnvelopeObjectSchema } from './StageCreateManyReportInputEnvelope.schema';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema'

export const StageCreateNestedManyWithoutReportInputObjectSchema: z.ZodType<Prisma.StageCreateNestedManyWithoutReportInput, Prisma.StageCreateNestedManyWithoutReportInput> = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutReportInputObjectSchema), z.lazy(() => StageCreateWithoutReportInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyReportInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StageCreateNestedManyWithoutReportInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutReportInputObjectSchema), z.lazy(() => StageCreateWithoutReportInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyReportInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
