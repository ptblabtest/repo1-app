import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteCreateWithoutCreatedByInputObjectSchema } from './NoteCreateWithoutCreatedByInput.schema';
import { NoteUncheckedCreateWithoutCreatedByInputObjectSchema } from './NoteUncheckedCreateWithoutCreatedByInput.schema';
import { NoteCreateOrConnectWithoutCreatedByInputObjectSchema } from './NoteCreateOrConnectWithoutCreatedByInput.schema';
import { NoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './NoteUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { NoteCreateManyCreatedByInputEnvelopeObjectSchema } from './NoteCreateManyCreatedByInputEnvelope.schema';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './NoteUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { NoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './NoteUpdateManyWithWhereWithoutCreatedByInput.schema';
import { NoteScalarWhereInputObjectSchema } from './NoteScalarWhereInput.schema'

export const NoteUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.NoteUpdateManyWithoutCreatedByNestedInput, Prisma.NoteUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => NoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => NoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => NoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const NoteUpdateManyWithoutCreatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => NoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => NoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => NoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
