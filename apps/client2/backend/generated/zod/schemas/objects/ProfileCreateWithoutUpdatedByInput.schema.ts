import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorProfileInputObjectSchema } from './UserCreateNestedOneWithoutCreatorProfileInput.schema';
import { UserCreateNestedOneWithoutProfileInputObjectSchema } from './UserCreateNestedOneWithoutProfileInput.schema'

export const ProfileCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutUpdatedByInput, Prisma.ProfileCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorProfileInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema)
}).strict();
export const ProfileCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorProfileInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema)
}).strict();
