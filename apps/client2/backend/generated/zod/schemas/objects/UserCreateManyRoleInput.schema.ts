import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserStatusSchema } from '../enums/UserStatus.schema'

export const UserCreateManyRoleInputObjectSchema: z.ZodType<Prisma.UserCreateManyRoleInput, Prisma.UserCreateManyRoleInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  departmentId: z.string().nullish(),
  organizationId: z.string().nullish()
}).strict();
export const UserCreateManyRoleInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  departmentId: z.string().nullish(),
  organizationId: z.string().nullish()
}).strict();
