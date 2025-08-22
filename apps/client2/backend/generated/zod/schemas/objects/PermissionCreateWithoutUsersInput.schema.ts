import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema } from './UserCreateNestedOneWithoutCreatorPermissionInput.schema';
import { UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterPermissionInput.schema';
import { DepartmentPermissionCreateNestedManyWithoutPermissionInputObjectSchema } from './DepartmentPermissionCreateNestedManyWithoutPermissionInput.schema'

export const PermissionCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.PermissionCreateWithoutUsersInput, Prisma.PermissionCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
export const PermissionCreateWithoutUsersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatorPermissionInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
