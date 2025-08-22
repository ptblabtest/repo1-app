import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema } from './DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInput.schema';
import { UserPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema } from './UserPermissionUncheckedCreateNestedManyWithoutPermissionInput.schema'

export const PermissionUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutCreatedByInput, Prisma.PermissionUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish(),
  dept: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
export const PermissionUncheckedCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish(),
  dept: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema).optional(),
  users: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
