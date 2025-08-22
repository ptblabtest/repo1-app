import { z } from 'zod';
export const OrganizationGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));