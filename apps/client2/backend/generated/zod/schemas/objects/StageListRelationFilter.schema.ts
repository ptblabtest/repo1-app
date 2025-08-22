import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageWhereInputObjectSchema } from './StageWhereInput.schema'

export const StageListRelationFilterObjectSchema: z.ZodType<Prisma.StageListRelationFilter, Prisma.StageListRelationFilter> = z.object({
  every: z.lazy(() => StageWhereInputObjectSchema).optional(),
  some: z.lazy(() => StageWhereInputObjectSchema).optional(),
  none: z.lazy(() => StageWhereInputObjectSchema).optional()
}).strict();
export const StageListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => StageWhereInputObjectSchema).optional(),
  some: z.lazy(() => StageWhereInputObjectSchema).optional(),
  none: z.lazy(() => StageWhereInputObjectSchema).optional()
}).strict();
