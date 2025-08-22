import { z } from 'zod';
export const ReportCategoryFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  parent: z.unknown().optional(),
  parentId: z.string().optional(),
  children: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.unknown().optional(),
  createdById: z.string().optional(),
  updatedBy: z.unknown().optional(),
  updatedById: z.string().optional(),
  reports: z.array(z.unknown())
}));