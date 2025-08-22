import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const NestedDateTimeFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeFilter, Prisma.NestedDateTimeFilter> = z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.iso.datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.iso.datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict();
export const NestedDateTimeFilterObjectZodSchema = z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.iso.datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.iso.datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict();
