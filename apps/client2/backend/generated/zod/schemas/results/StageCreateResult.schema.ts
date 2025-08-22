import { z } from 'zod';
export const StageCreateResultSchema = z.object({
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
});