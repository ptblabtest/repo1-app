import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorProfileNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorProfileNestedInput.schema';
import { UserUpdateOneWithoutUpdaterProfileNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterProfileNestedInput.schema'

export const ProfileUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUpdateWithoutUserInput, Prisma.ProfileUpdateWithoutUserInput> = z.object({
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  department: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  position: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  joinDate: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorProfileNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterProfileNestedInputObjectSchema).optional()
}).strict();
export const ProfileUpdateWithoutUserInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  department: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  position: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  joinDate: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).nullish(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorProfileNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterProfileNestedInputObjectSchema).optional()
}).strict();
