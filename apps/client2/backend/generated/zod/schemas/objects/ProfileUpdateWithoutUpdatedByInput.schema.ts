import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorProfileNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorProfileNestedInput.schema';
import { UserUpdateOneRequiredWithoutProfileNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutProfileNestedInput.schema'

export const ProfileUpdateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ProfileUpdateWithoutUpdatedByInput, Prisma.ProfileUpdateWithoutUpdatedByInput> = z.object({
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  department: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  position: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  joinDate: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorProfileNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProfileNestedInputObjectSchema).optional()
}).strict();
export const ProfileUpdateWithoutUpdatedByInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  department: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  position: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  joinDate: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorProfileNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProfileNestedInputObjectSchema).optional()
}).strict();
