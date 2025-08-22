import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorPermissionInput.schema';
import { UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterPermissionInput.schema';
import { DepartmentPermissionCreateNestedManyWithoutPermissionInputObjectSchema } from './DepartmentPermissionCreateNestedManyWithoutPermissionInput.schema';
import { UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema } from './UserPermissionCreateNestedManyWithoutPermissionInput.schema'

export const PermissionCreateInputObjectSchema: z.ZodType<Prisma.PermissionCreateInput, Prisma.PermissionCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
export const PermissionCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
