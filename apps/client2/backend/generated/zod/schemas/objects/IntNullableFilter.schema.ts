import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema'

export const IntNullableFilterObjectSchema: z.ZodType<Prisma.IntNullableFilter, Prisma.IntNullableFilter> = z.object({
  equals: z.number().int().nullish(),
  in: z.number().int().array().nullish(),
  notIn: z.number().int().array().nullish(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableFilterObjectSchema)]).nullish()
}).strict();
export const IntNullableFilterObjectZodSchema = z.object({
  equals: z.number().int().nullish(),
  in: z.number().int().array().nullish(),
  notIn: z.number().int().array().nullish(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntNullableFilterObjectSchema)]).nullish()
}).strict();
