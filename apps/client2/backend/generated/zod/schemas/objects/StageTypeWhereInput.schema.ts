import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StageListRelationFilterObjectSchema } from './StageListRelationFilter.schema'

export const StageTypeWhereInputObjectSchema: z.ZodType<Prisma.StageTypeWhereInput, Prisma.StageTypeWhereInput> = z.object({
  AND: z.union([z.lazy(() => StageTypeWhereInputObjectSchema), z.lazy(() => StageTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageTypeWhereInputObjectSchema), z.lazy(() => StageTypeWhereInputObjectSchema).array()]).optional(),
  model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  stages: z.lazy(() => StageListRelationFilterObjectSchema).optional()
}).strict();
export const StageTypeWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => StageTypeWhereInputObjectSchema), z.lazy(() => StageTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageTypeWhereInputObjectSchema), z.lazy(() => StageTypeWhereInputObjectSchema).array()]).optional(),
  model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  stages: z.lazy(() => StageListRelationFilterObjectSchema).optional()
}).strict();
