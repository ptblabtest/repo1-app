import { z } from 'zod';
export const PermissionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.unknown().optional(),
  createdById: z.string().optional(),
  updatedBy: z.unknown().optional(),
  updatedById: z.string().optional(),
  dept: z.array(z.unknown()),
  users: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});