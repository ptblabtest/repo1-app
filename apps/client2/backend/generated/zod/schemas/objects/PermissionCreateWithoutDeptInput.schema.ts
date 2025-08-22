import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorPermissionInput.schema';
import { UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterPermissionInput.schema';
import { UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema } from './UserPermissionCreateNestedManyWithoutPermissionInput.schema'

export const PermissionCreateWithoutDeptInputObjectSchema: z.ZodType<Prisma.PermissionCreateWithoutDeptInput, Prisma.PermissionCreateWithoutDeptInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
export const PermissionCreateWithoutDeptInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
