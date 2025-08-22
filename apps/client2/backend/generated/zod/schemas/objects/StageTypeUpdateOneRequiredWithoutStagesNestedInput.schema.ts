import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeCreateWithoutStagesInputObjectSchema } from './StageTypeCreateWithoutStagesInput.schema';
import { StageTypeUncheckedCreateWithoutStagesInputObjectSchema } from './StageTypeUncheckedCreateWithoutStagesInput.schema';
import { StageTypeCreateOrConnectWithoutStagesInputObjectSchema } from './StageTypeCreateOrConnectWithoutStagesInput.schema';
import { StageTypeUpsertWithoutStagesInputObjectSchema } from './StageTypeUpsertWithoutStagesInput.schema';
import { StageTypeWhereUniqueInputObjectSchema } from './StageTypeWhereUniqueInput.schema';
import { StageTypeUpdateToOneWithWhereWithoutStagesInputObjectSchema } from './StageTypeUpdateToOneWithWhereWithoutStagesInput.schema';
import { StageTypeUpdateWithoutStagesInputObjectSchema } from './StageTypeUpdateWithoutStagesInput.schema';
import { StageTypeUncheckedUpdateWithoutStagesInputObjectSchema } from './StageTypeUncheckedUpdateWithoutStagesInput.schema'

export const StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectSchema: z.ZodType<Prisma.StageTypeUpdateOneRequiredWithoutStagesNestedInput, Prisma.StageTypeUpdateOneRequiredWithoutStagesNestedInput> = z.object({
  create: z.union([z.lazy(() => StageTypeCreateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedCreateWithoutStagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StageTypeCreateOrConnectWithoutStagesInputObjectSchema).optional(),
  upsert: z.lazy(() => StageTypeUpsertWithoutStagesInputObjectSchema).optional(),
  connect: z.lazy(() => StageTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StageTypeUpdateToOneWithWhereWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUpdateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedUpdateWithoutStagesInputObjectSchema)]).optional()
}).strict();
export const StageTypeUpdateOneRequiredWithoutStagesNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => StageTypeCreateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedCreateWithoutStagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StageTypeCreateOrConnectWithoutStagesInputObjectSchema).optional(),
  upsert: z.lazy(() => StageTypeUpsertWithoutStagesInputObjectSchema).optional(),
  connect: z.lazy(() => StageTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StageTypeUpdateToOneWithWhereWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUpdateWithoutStagesInputObjectSchema), z.lazy(() => StageTypeUncheckedUpdateWithoutStagesInputObjectSchema)]).optional()
}).strict();
