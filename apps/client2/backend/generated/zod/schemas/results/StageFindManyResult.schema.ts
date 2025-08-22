import { z } from 'zod';
export const StageFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  stageTypeId: z.string(),
  comment: z.string().optional(),
  createdById: z.string().optional(),
  updatedById: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  type: z.unknown(),
  createdBy: z.unknown().optional(),
  updatedBy: z.unknown().optional(),
  report: z.unknown().optional(),
  reportId: z.string().optional()
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