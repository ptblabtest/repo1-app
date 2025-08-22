import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StageTypeWhereInputObjectSchema } from './StageTypeWhereInput.schema'

export const StageTypeScalarRelationFilterObjectSchema: z.ZodType<Prisma.StageTypeScalarRelationFilter, Prisma.StageTypeScalarRelationFilter> = z.object({
  is: z.lazy(() => StageTypeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => StageTypeWhereInputObjectSchema).optional()
}).strict();
export const StageTypeScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => StageTypeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => StageTypeWhereInputObjectSchema).optional()
}).strict();
