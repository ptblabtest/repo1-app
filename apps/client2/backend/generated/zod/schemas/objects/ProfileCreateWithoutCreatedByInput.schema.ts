import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterProfileInput.schema';
import { UserCreateNestedOneWithoutProfileInputObjectSchema } from './UserCreateNestedOneWithoutProfileInput.schema'

export const ProfileCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutCreatedByInput, Prisma.ProfileCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema)
}).strict();
export const ProfileCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterProfileInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema)
}).strict();
