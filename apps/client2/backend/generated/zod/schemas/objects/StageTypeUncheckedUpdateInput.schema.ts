import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StageUncheckedUpdateManyWithoutTypeNestedInputObjectSchema } from './StageUncheckedUpdateManyWithoutTypeNestedInput.schema'

export const StageTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.StageTypeUncheckedUpdateInput, Prisma.StageTypeUncheckedUpdateInput> = z.object({
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  stages: z.lazy(() => StageUncheckedUpdateManyWithoutTypeNestedInputObjectSchema).optional()
}).strict();
export const StageTypeUncheckedUpdateInputObjectZodSchema = z.object({
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  stages: z.lazy(() => StageUncheckedUpdateManyWithoutTypeNestedInputObjectSchema).optional()
}).strict();
