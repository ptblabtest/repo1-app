import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema'

export const DepartmentScalarRelationFilterObjectSchema: z.ZodType<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentScalarRelationFilter> = z.object({
  is: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => DepartmentWhereInputObjectSchema).optional()
}).strict();
export const DepartmentScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => DepartmentWhereInputObjectSchema).optional()
}).strict();
