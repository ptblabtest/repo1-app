import { z } from 'zod';
export const DepartmentCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  createdBy: z.unknown().optional(),
  createdById: z.string().optional(),
  updatedBy: z.unknown().optional(),
  updatedById: z.string().optional(),
  users: z.array(z.unknown()),
  permissions: z.array(z.unknown())
});