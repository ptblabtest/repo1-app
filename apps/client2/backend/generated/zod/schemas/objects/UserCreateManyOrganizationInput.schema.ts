import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserStatusSchema } from '../enums/UserStatus.schema'

export const UserCreateManyOrganizationInputObjectSchema: z.ZodType<Prisma.UserCreateManyOrganizationInput, Prisma.UserCreateManyOrganizationInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  departmentId: z.string().nullish(),
  roleId: z.string().nullish()
}).strict();
export const UserCreateManyOrganizationInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  departmentId: z.string().nullish(),
  roleId: z.string().nullish()
}).strict();
