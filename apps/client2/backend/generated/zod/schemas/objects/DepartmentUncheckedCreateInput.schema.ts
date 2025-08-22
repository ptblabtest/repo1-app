import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutDepartmentInput.schema';
import { DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DepartmentUncheckedCreateInput, Prisma.DepartmentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional(),
  permissions: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
