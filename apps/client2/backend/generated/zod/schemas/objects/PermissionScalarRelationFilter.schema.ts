import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema'

export const PermissionScalarRelationFilterObjectSchema: z.ZodType<Prisma.PermissionScalarRelationFilter, Prisma.PermissionScalarRelationFilter> = z.object({
  is: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PermissionWhereInputObjectSchema).optional()
}).strict();
export const PermissionScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PermissionWhereInputObjectSchema).optional()
}).strict();
