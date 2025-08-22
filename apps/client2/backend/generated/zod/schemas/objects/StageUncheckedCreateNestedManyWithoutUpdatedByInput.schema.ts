import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateWithoutUpdatedByInputObjectSchema } from './StageCreateWithoutUpdatedByInput.schema';
import { StageUncheckedCreateWithoutUpdatedByInputObjectSchema } from './StageUncheckedCreateWithoutUpdatedByInput.schema';
import { StageCreateOrConnectWithoutUpdatedByInputObjectSchema } from './StageCreateOrConnectWithoutUpdatedByInput.schema';
import { StageCreateManyUpdatedByInputEnvelopeObjectSchema } from './StageCreateManyUpdatedByInputEnvelope.schema';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema'

export const StageUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.StageUncheckedCreateNestedManyWithoutUpdatedByInput, Prisma.StageUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StageUncheckedCreateNestedManyWithoutUpdatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
