import { z } from 'zod';
export const ReportFindManyResultSchema = z.object({
  data: z.array(z.object({
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