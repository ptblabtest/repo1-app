import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionDepartmentIdPermissionIdCompoundUniqueInputObjectSchema } from './DepartmentPermissionDepartmentIdPermissionIdCompoundUniqueInput.schema'

export const DepartmentPermissionWhereUniqueInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionWhereUniqueInput, Prisma.DepartmentPermissionWhereUniqueInput> = z.object({
  id: z.string(),
  departmentId_permissionId: z.lazy(() => DepartmentPermissionDepartmentIdPermissionIdCompoundUniqueInputObjectSchema)
}).strict();
export const DepartmentPermissionWhereUniqueInputObjectZodSchema = z.object({
  id: z.string(),
  departmentId_permissionId: z.lazy(() => DepartmentPermissionDepartmentIdPermissionIdCompoundUniqueInputObjectSchema)
}).strict();
