import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeCreateWithoutStagesInputObjectSchema } from './StageTypeCreateWithoutStagesInput.schema';
import { StageTypeUncheckedCreateWithoutStagesInputObjectSchema } from './StageTypeUncheckedCreateWithoutStagesInput.schema';
import { StageTypeCreateOrConnectWithoutStagesInputObjectSchema } from './StageTypeCreateOrConnectWithoutStagesInput.schema';
import { StageTypeWhereUniqueInputObjectSchema } from './StageTypeWhereUniqueInput.schema'

export const StageTypeCreateNestedOneWithoutStagesInputObjectSchema: z.ZodType<Prisma.StageTypeCreateNestedOneWithoutStagesInput, Prisma.StageTypeCreateNestedOneWithoutStagesInput> = z.object({
  create: z.union([z.lazy(() => StageTypeCreateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedCreateWithoutStagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StageTypeCreateOrConnectWithoutStagesInputObjectSchema).optional(),
  connect: z.lazy(() => StageTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const StageTypeCreateNestedOneWithoutStagesInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageTypeCreateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedCreateWithoutStagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StageTypeCreateOrConnectWithoutStagesInputObjectSchema).optional(),
  connect: z.lazy(() => StageTypeWhereUniqueInputObjectSchema).optional()
}).strict();
