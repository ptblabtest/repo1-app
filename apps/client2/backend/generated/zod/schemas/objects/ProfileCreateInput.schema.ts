import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorProfileInputObjectSchema } from './UserCreateNestedOneWithoutCreatorProfileInput.schema';
import { UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterProfileInput.schema';
import { UserCreateNestedOneWithoutProfileInputObjectSchema } from './UserCreateNestedOneWithoutProfileInput.schema'

export const ProfileCreateInputObjectSchema: z.ZodType<Prisma.ProfileCreateInput, Prisma.ProfileCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorProfileInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema)
}).strict();
export const ProfileCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorProfileInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema)
}).strict();
