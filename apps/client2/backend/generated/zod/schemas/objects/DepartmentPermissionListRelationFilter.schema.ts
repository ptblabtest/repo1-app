import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereInputObjectSchema } from './DepartmentPermissionWhereInput.schema'

export const DepartmentPermissionListRelationFilterObjectSchema: z.ZodType<Prisma.DepartmentPermissionListRelationFilter, Prisma.DepartmentPermissionListRelationFilter> = z.object({
  every: z.lazy(() => DepartmentPermissionWhereInputObjectSchema).optional(),
  some: z.lazy(() => DepartmentPermissionWhereInputObjectSchema).optional(),
  none: z.lazy(() => DepartmentPermissionWhereInputObjectSchema).optional()
}).strict();
export const DepartmentPermissionListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => DepartmentPermissionWhereInputObjectSchema).optional(),
  some: z.lazy(() => DepartmentPermissionWhereInputObjectSchema).optional(),
  none: z.lazy(() => DepartmentPermissionWhereInputObjectSchema).optional()
}).strict();
