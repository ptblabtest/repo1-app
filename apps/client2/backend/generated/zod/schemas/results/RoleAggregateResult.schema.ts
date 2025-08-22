import { z } from 'zod';
export const RoleAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    level: z.number(),
    users: z.number()
  }).optional(),
  _sum: z.object({
    level: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    level: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    level: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    level: z.number().int().nullable()
  }).nullable().optional()});