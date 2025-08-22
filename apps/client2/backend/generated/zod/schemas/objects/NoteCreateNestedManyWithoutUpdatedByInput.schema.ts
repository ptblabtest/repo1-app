import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteCreateWithoutUpdatedByInputObjectSchema } from './NoteCreateWithoutUpdatedByInput.schema';
import { NoteUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NoteUncheckedCreateWithoutUpdatedByInput.schema';
import { NoteCreateOrConnectWithoutUpdatedByInputObjectSchema } from './NoteCreateOrConnectWithoutUpdatedByInput.schema';
import { NoteCreateManyUpdatedByInputEnvelopeObjectSchema } from './NoteCreateManyUpdatedByInputEnvelope.schema';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema'

export const NoteCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.NoteCreateNestedManyWithoutUpdatedByInput, Prisma.NoteCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const NoteCreateNestedManyWithoutUpdatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => NoteCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => NoteCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => NoteWhereUniqueInputObjectSchema), z.lazy(() => NoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
