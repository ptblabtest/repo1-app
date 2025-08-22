import { z } from 'zod';
export const PermissionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdById: z.string(),
  updatedById: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    resource: z.number(),
    action: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    createdBy: z.number(),
    createdById: z.number(),
    updatedBy: z.number(),
    updatedById: z.number(),
    dept: z.number(),
    users: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    resource: z.string().nullable(),
    action: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    resource: z.string().nullable(),
    action: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional()
}));