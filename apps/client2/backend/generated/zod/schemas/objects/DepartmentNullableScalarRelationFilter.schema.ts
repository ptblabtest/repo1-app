import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema'

export const DepartmentNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => DepartmentWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => DepartmentWhereInputObjectSchema).nullish()
}).strict();
export const DepartmentNullableScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => DepartmentWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => DepartmentWhereInputObjectSchema).nullish()
}).strict();
