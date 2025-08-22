import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageCreateWithoutTypeInputObjectSchema } from './StageCreateWithoutTypeInput.schema';
import { StageUncheckedCreateWithoutTypeInputObjectSchema } from './StageUncheckedCreateWithoutTypeInput.schema';
import { StageCreateOrConnectWithoutTypeInputObjectSchema } from './StageCreateOrConnectWithoutTypeInput.schema';
import { StageCreateManyTypeInputEnvelopeObjectSchema } from './StageCreateManyTypeInputEnvelope.schema';
import { StageWhereUniqueInputObjectSchema } from './StageWhereUniqueInput.schema'

export const StageUncheckedCreateNestedManyWithoutTypeInputObjectSchema: z.ZodType<Prisma.StageUncheckedCreateNestedManyWithoutTypeInput, Prisma.StageUncheckedCreateNestedManyWithoutTypeInput> = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutTypeInputObjectSchema), z.lazy(() => StageCreateWithoutTypeInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutTypeInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StageUncheckedCreateNestedManyWithoutTypeInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageCreateWithoutTypeInputObjectSchema), z.lazy(() => StageCreateWithoutTypeInputObjectSchema).array(), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema), z.lazy(() => StageUncheckedCreateWithoutTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StageCreateOrConnectWithoutTypeInputObjectSchema), z.lazy(() => StageCreateOrConnectWithoutTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StageCreateManyTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StageWhereUniqueInputObjectSchema), z.lazy(() => StageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
