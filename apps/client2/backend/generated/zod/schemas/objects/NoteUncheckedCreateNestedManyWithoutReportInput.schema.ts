import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteCreateWithoutReportInputObjectSchema } from './NoteCreateWithoutReportInput.schema';
import { NoteUncheckedCreateWithoutReportInputObjectSchema } from './NoteUncheckedCreateWithoutReportInput.schema';
import { NoteCreateOrConnectWithoutReportInputObjectSchema } from './NoteCreateOrConnectWithoutReportInput.schema';
import { NoteCreateManyReportInputEnvelopeObjectSchema } from './NoteCreateManyReportInputEnvelope.schema';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema'

export const NoteUncheckedCreateNestedManyWithoutReportInputObjectSchema: z.ZodType<Prisma.NoteUncheckedCreateNestedManyWithoutReportInput, Prisma.NoteUncheckedCreateNestedManyWithoutReportInput> = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutReportInputObjectSchema), z.lazy(() => NoteCreateWithoutReportInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyReportInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const NoteUncheckedCreateNestedManyWithoutReportInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutReportInputObjectSchema), z.lazy(() => NoteCreateWithoutReportInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutReportInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutReportInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutReportInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyReportInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
