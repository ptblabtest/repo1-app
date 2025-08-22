import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentPermissionDepartmentIdPermissionIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionDepartmentIdPermissionIdCompoundUniqueInput, Prisma.DepartmentPermissionDepartmentIdPermissionIdCompoundUniqueInput> = z.object({
  departmentId: z.string(),
  permissionId: z.string()
}).strict();
export const DepartmentPermissionDepartmentIdPermissionIdCompoundUniqueInputObjectZodSchema = z.object({
  departmentId: z.string(),
  permissionId: z.string()
}).strict();
