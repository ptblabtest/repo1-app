import { z } from 'zod';
export const OrganizationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    code: z.number(),
    users: z.number(),
    Report: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    code: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    code: z.string().nullable()
  }).nullable().optional()});