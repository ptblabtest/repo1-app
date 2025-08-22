import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorProfileInputObjectSchema } from './UserCreateNestedOneWithoutCreatorProfileInput.schema';
import { UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterProfileInput.schema'

export const ProfileCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorProfileInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema).optional()
}).strict();
export const ProfileCreateWithoutUserInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorProfileInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema).optional()
}).strict();
