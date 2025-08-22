import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema'

export const DateTimeNullableFilterObjectSchema: z.ZodType<Prisma.DateTimeNullableFilter, Prisma.DateTimeNullableFilter> = z.object({
  equals: z.date().nullish(),
  in: z.union([z.date().array(), z.iso.datetime().array()]).nullish(),
  notIn: z.union([z.date().array(), z.iso.datetime().array()]).nullish(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterObjectSchema)]).nullish()
}).strict();
export const DateTimeNullableFilterObjectZodSchema = z.object({
  equals: z.date().nullish(),
  in: z.union([z.date().array(), z.iso.datetime().array()]).nullish(),
  notIn: z.union([z.date().array(), z.iso.datetime().array()]).nullish(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterObjectSchema)]).nullish()
}).strict();
