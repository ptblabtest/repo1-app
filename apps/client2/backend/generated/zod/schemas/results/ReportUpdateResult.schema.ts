import { z } from 'zod';
export const ReportUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  category: z.unknown(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string().optional(),
  version: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.unknown().optional(),
  createdById: z.string().optional(),
  updatedBy: z.unknown().optional(),
  updatedById: z.string().optional(),
  organization: z.unknown().optional(),
  organizationId: z.string().optional(),
  notes: z.array(z.unknown()),
  stages: z.array(z.unknown()),
  files: z.array(z.unknown())
}));