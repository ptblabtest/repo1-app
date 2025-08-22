import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema } from './UserCreateNestedOneWithoutUpdaterPermissionInput.schema';
import { DepartmentPermissionCreateNestedManyWithoutPermissionInputObjectSchema } from './DepartmentPermissionCreateNestedManyWithoutPermissionInput.schema';
import { UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema } from './UserPermissionCreateNestedManyWithoutPermissionInput.schema'

export const PermissionCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionCreateWithoutCreatedByInput, Prisma.PermissionCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
export const PermissionCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdaterPermissionInputObjectSchema).optional(),
  dept: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
