import { z } from 'zod';
export const FileFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().optional(),
  size: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
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