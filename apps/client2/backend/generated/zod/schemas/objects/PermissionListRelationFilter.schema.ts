import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema'

export const PermissionListRelationFilterObjectSchema: z.ZodType<Prisma.PermissionListRelationFilter, Prisma.PermissionListRelationFilter> = z.object({
  every: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  some: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  none: z.lazy(() => PermissionWhereInputObjectSchema).optional()
}).strict();
export const PermissionListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  some: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  none: z.lazy(() => PermissionWhereInputObjectSchema).optional()
}).strict();
