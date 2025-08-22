import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteCreateWithoutCreatedByInputObjectSchema } from './NoteCreateWithoutCreatedByInput.schema';
import { NoteUncheckedCreateWithoutCreatedByInputObjectSchema } from './NoteUncheckedCreateWithoutCreatedByInput.schema';
import { NoteCreateOrConnectWithoutCreatedByInputObjectSchema } from './NoteCreateOrConnectWithoutCreatedByInput.schema';
import { NoteCreateManyCreatedByInputEnvelopeObjectSchema } from './NoteCreateManyCreatedByInputEnvelope.schema';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema'

export const NoteUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.NoteUncheckedCreateNestedManyWithoutCreatedByInput, Prisma.NoteUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const NoteUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
