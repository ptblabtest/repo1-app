import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema } from './UserPermissionUncheckedCreateNestedManyWithoutPermissionInput.schema'

export const PermissionUncheckedCreateWithoutDeptInputObjectSchema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutDeptInput, Prisma.PermissionUncheckedCreateWithoutDeptInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  users: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
export const PermissionUncheckedCreateWithoutDeptInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  users: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
