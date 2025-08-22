import { z } from 'zod';
export const ProfileFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string().optional(),
  department: z.string().optional(),
  position: z.string().optional(),
  joinDate: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.unknown().optional(),
  createdById: z.string().optional(),
  updatedBy: z.unknown().optional(),
  updatedById: z.string().optional(),
  user: z.unknown(),
  userId: z.string()
}));