import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema } from './DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInput.schema'

export const PermissionUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutUsersInput, Prisma.PermissionUncheckedCreateWithoutUsersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  dept: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
export const PermissionUncheckedCreateWithoutUsersInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  dept: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema).optional()
}).strict();
