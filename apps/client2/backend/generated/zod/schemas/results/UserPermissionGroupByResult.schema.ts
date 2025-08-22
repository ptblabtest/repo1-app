import { z } from 'zod';
export const UserPermissionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date(),
  createdById: z.string(),
  updatedById: z.string(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    permissionId: z.number(),
    createdAt: z.number(),
    user: z.number(),
    permission: z.number(),
    createdBy: z.number(),
    createdById: z.number(),
    updatedBy: z.number(),
    updatedById: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    permissionId: z.string().nullable(),
    createdAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    permissionId: z.string().nullable(),
    createdAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional()
}));