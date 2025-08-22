import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteCreateWithoutUpdatedByInputObjectSchema } from './NoteCreateWithoutUpdatedByInput.schema';
import { NoteUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NoteUncheckedCreateWithoutUpdatedByInput.schema';
import { NoteCreateOrConnectWithoutUpdatedByInputObjectSchema } from './NoteCreateOrConnectWithoutUpdatedByInput.schema';
import { NoteUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './NoteUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { NoteCreateManyUpdatedByInputEnvelopeObjectSchema } from './NoteCreateManyUpdatedByInputEnvelope.schema';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './NoteUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { NoteUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './NoteUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { NoteScalarWhereInputObjectSchema } from './NoteScalarWhereInput.schema'

export const NoteUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.NoteUpdateManyWithoutUpdatedByNestedInput, Prisma.NoteUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => NoteUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => NoteUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => NoteUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const NoteUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => NoteUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => NoteUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => NoteUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => NoteScalarWhereInputObjectSchema), z.lazy(() => NoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
