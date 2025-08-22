import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutDepartmentInput.schema'

export const DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutPermissionsInput, Prisma.DepartmentUncheckedCreateWithoutPermissionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
export const DepartmentUncheckedCreateWithoutPermissionsInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema).optional()
}).strict();
