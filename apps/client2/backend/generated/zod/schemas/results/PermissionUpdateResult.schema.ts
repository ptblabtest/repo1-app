import { z } from 'zod';
export const PermissionUpdateResultSchema = z.nullable(z.object({
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
}));