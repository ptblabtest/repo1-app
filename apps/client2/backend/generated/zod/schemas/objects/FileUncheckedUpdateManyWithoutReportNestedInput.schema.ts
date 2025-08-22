import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { FileCreateWithoutReportInputObjectSchema } from './FileCreateWithoutReportInput.schema';
import { FileUncheckedCreateWithoutReportInputObjectSchema } from './FileUncheckedCreateWithoutReportInput.schema';
import { FileCreateOrConnectWithoutReportInputObjectSchema } from './FileCreateOrConnectWithoutReportInput.schema';
import { FileUpsertWithWhereUniqueWithoutReportInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutReportInput.schema';
import { FileCreateManyReportInputEnvelopeObjectSchema } from './FileCreateManyReportInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutReportInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutReportInput.schema';
import { FileUpdateManyWithWhereWithoutReportInputObjectSchema } from './FileUpdateManyWithWhereWithoutReportInput.schema';
import { FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

export const FileUncheckedUpdateManyWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.FileUncheckedUpdateManyWithoutReportNestedInput, Prisma.FileUncheckedUpdateManyWithoutReportNestedInput> = z.object({
  create: z.union([z.lazy(() => FileCreateWithoutReportInputObjectSchema), z.lazy(() => FileCreateWithoutReportInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyReportInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutReportInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutReportInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUncheckedUpdateManyWithoutReportNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => FileCreateWithoutReportInputObjectSchema), z.lazy(() => FileCreateWithoutReportInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyReportInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutReportInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutReportInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
