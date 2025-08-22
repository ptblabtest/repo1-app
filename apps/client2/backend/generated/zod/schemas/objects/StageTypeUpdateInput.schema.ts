import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StageUpdateManyWithoutTypeNestedInputObjectSchema } from './StageUpdateManyWithoutTypeNestedInput.schema'

export const StageTypeUpdateInputObjectSchema: z.ZodType<Prisma.StageTypeUpdateInput, Prisma.StageTypeUpdateInput> = z.object({
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  stages: z.lazy(() => StageUpdateManyWithoutTypeNestedInputObjectSchema).optional()
}).strict();
export const StageTypeUpdateInputObjectZodSchema = z.object({
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  stages: z.lazy(() => StageUpdateManyWithoutTypeNestedInputObjectSchema).optional()
}).strict();
