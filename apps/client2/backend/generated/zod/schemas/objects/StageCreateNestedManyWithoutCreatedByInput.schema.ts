import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateWithoutCreatedByInputObjectSchema } from './StageCreateWithoutCreatedByInput.schema';
import { StageUncheckedCreateWithoutCreatedByInputObjectSchema } from './StageUncheckedCreateWithoutCreatedByInput.schema';
import { StageCreateOrConnectWithoutCreatedByInputObjectSchema } from './StageCreateOrConnectWithoutCreatedByInput.schema';
import { StageCreateManyCreatedByInputEnvelopeObjectSchema } from './StageCreateManyCreatedByInputEnvelope.schema';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema'

export const StageCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.StageCreateNestedManyWithoutCreatedByInput, Prisma.StageCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StageCreateNestedManyWithoutCreatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
