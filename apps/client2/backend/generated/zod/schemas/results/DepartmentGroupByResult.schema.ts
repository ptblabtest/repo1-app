import { z } from 'zod';
export const DepartmentGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  createdById: z.string(),
  updatedById: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    code: z.number(),
    createdBy: z.number(),
    createdById: z.number(),
    updatedBy: z.number(),
    updatedById: z.number(),
    users: z.number(),
    permissions: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    code: z.string().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    code: z.string().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional()
}));