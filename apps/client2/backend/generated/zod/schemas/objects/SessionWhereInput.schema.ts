import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

export const SessionWhereInputObjectSchema: z.ZodType<Prisma.SessionWhereInput, Prisma.SessionWhereInput> = z.object({
  AND: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  sid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sess: z.lazy(() => JsonFilterObjectSchema).optional(),
  expire: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const SessionWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  sid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  sess: z.lazy(() => JsonFilterObjectSchema).optional(),
  expire: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
