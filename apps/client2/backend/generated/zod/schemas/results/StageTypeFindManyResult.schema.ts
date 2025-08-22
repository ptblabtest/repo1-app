import { z } from 'zod';
export const StageTypeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string(),
  stages: z.array(z.unknown())
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