import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserStatusSchema } from '../enums/UserStatus.schema'

export const UserCreateManyDepartmentInputObjectSchema: z.ZodType<Prisma.UserCreateManyDepartmentInput, Prisma.UserCreateManyDepartmentInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  organizationId: z.string().nullish(),
  roleId: z.string().nullish()
}).strict();
export const UserCreateManyDepartmentInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  organizationId: z.string().nullish(),
  roleId: z.string().nullish()
}).strict();
