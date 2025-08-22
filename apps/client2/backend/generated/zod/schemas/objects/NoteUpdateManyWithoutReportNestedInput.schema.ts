import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteCreateWithoutReportInputObjectSchema } from './NoteCreateWithoutReportInput.schema';
import { NoteUncheckedCreateWithoutReportInputObjectSchema } from './NoteUncheckedCreateWithoutReportInput.schema';
import { NoteCreateOrConnectWithoutReportInputObjectSchema } from './NoteCreateOrConnectWithoutReportInput.schema';
import { NoteUpsertWithWhereUniqueWithoutReportInputObjectSchema } from './NoteUpsertWithWhereUniqueWithoutReportInput.schema';
import { NoteCreateManyReportInputEnvelopeObjectSchema } from './NoteCreateManyReportInputEnvelope.schema';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteUpdateWithWhereUniqueWithoutReportInputObjectSchema } from './NoteUpdateWithWhereUniqueWithoutReportInput.schema';
import { NoteUpdateManyWithWhereWithoutReportInputObjectSchema } from './NoteUpdateManyWithWhereWithoutReportInput.schema';
import { NoteScalarWhereInputObjectSchema } from './NoteScalarWhereInput.schema'

export const NoteUpdateManyWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.NoteUpdateManyWithoutReportNestedInput, Prisma.NoteUpdateManyWithoutReportNestedInput> = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutReportInputObjectSchema), z.lazy(() => NoteCreateWithoutReportInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => NoteUpsertWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => NoteUpsertWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyReportInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => NoteUpdateWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => NoteUpdateWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => NoteUpdateManyWithWhereWithoutReportInputObjectSchema), z.lazy(() => NoteUpdateManyWithWhereWithoutReportInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const NoteUpdateManyWithoutReportNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutReportInputObjectSchema), z.lazy(() => NoteCreateWithoutReportInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => NoteUpsertWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => NoteUpsertWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyReportInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => NoteUpdateWithWhereUniqueWithoutReportInputObjectSchema), z.lazy(() => NoteUpdateWithWhereUniqueWithoutReportInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => NoteUpdateManyWithWhereWithoutReportInputObjectSchema), z.lazy(() => NoteUpdateManyWithWhereWithoutReportInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
