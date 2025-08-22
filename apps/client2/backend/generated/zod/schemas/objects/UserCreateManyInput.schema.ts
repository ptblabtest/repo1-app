import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserStatusSchema } from '../enums/UserStatus.schema'

export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput, Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  departmentId: z.string().nullish(),
  organizationId: z.string().nullish(),
  roleId: z.string().nullish()
}).strict();
export const UserCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  departmentId: z.string().nullish(),
  organizationId: z.string().nullish(),
  roleId: z.string().nullish()
}).strict();
