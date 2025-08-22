import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NoteWhereUniqueInputObjectSchema } from './NoteWhereUniqueInput.schema';
import { NoteCreateWithoutUpdatedByInputObjectSchema } from './NoteCreateWithoutUpdatedByInput.schema';
import { NoteUncheckedCreateWithoutUpdatedByInputObjectSchema } from './NoteUncheckedCreateWithoutUpdatedByInput.schema'

export const NoteCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.NoteCreateOrConnectWithoutUpdatedByInput, Prisma.NoteCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const NoteCreateOrConnectWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => NoteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NoteCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => NoteUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
