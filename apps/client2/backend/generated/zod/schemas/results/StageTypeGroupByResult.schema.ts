import { z } from 'zod';
export const StageTypeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string(),
  _count: z.object({
    id: z.number(),
    model: z.number(),
    order: z.number(),
    value: z.number(),
    label: z.number(),
    stages: z.number()
  }).optional(),
  _sum: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    model: z.string().nullable(),
    order: z.number().int().nullable(),
    value: z.string().nullable(),
    label: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    model: z.string().nullable(),
    order: z.number().int().nullable(),
    value: z.string().nullable(),
    label: z.string().nullable()
  }).nullable().optional()
}));