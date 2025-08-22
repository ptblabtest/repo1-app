import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { FileCreateWithoutReportInputObjectSchema } from './FileCreateWithoutReportInput.schema';
import { FileUncheckedCreateWithoutReportInputObjectSchema } from './FileUncheckedCreateWithoutReportInput.schema';
import { FileCreateOrConnectWithoutReportInputObjectSchema } from './FileCreateOrConnectWithoutReportInput.schema';
import { FileCreateManyReportInputEnvelopeObjectSchema } from './FileCreateManyReportInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

export const FileUncheckedCreateNestedManyWithoutReportInputObjectSchema: z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutReportInput, Prisma.FileUncheckedCreateNestedManyWithoutReportInput> = z.object({
  create: z.union([z.lazy(() => FileCreateWithoutReportInputObjectSchema), z.lazy(() => FileCreateWithoutReportInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyReportInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileUncheckedCreateNestedManyWithoutReportInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => FileCreateWithoutReportInputObjectSchema), z.lazy(() => FileCreateWithoutReportInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyReportInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
