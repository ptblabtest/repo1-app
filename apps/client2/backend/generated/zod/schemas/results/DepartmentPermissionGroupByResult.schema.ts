import { z } from 'zod';
export const DepartmentPermissionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  departmentId: z.string(),
  permissionId: z.string(),
  createdAt: z.date(),
  createdById: z.string(),
  updatedById: z.string(),
  _count: z.object({
    id: z.number(),
    departmentId: z.number(),
    permissionId: z.number(),
    createdAt: z.number(),
    createdBy: z.number(),
    createdById: z.number(),
    updatedBy: z.number(),
    updatedById: z.number(),
    department: z.number(),
    permission: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    departmentId: z.string().nullable(),
    permissionId: z.string().nullable(),
    createdAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    departmentId: z.string().nullable(),
    permissionId: z.string().nullable(),
    createdAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional()
}));