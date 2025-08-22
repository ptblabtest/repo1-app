import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

export const StageTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StageTypeScalarWhereWithAggregatesInput, Prisma.StageTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  model: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const StageTypeScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StageTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  model: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  label: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
