import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema'

export const DepartmentListRelationFilterObjectSchema: z.ZodType<Prisma.DepartmentListRelationFilter, Prisma.DepartmentListRelationFilter> = z.object({
  every: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  some: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  none: z.lazy(() => DepartmentWhereInputObjectSchema).optional()
}).strict();
export const DepartmentListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  some: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  none: z.lazy(() => DepartmentWhereInputObjectSchema).optional()
}).strict();
