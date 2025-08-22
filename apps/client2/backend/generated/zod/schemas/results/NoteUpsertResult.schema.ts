import { z } from 'zod';
export const NoteUpsertResultSchema = z.object({
  id: z.string(),
  description: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.unknown().optional(),
  createdById: z.string().optional(),
  updatedBy: z.unknown().optional(),
  updatedById: z.string().optional(),
  report: z.unknown().optional(),
  reportId: z.string().optional()
});