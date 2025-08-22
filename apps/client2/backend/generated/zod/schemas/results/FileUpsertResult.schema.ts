import { z } from 'zod';
export const FileUpsertResultSchema = z.object({
  id: z.string(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string().optional(),
  size: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  report: z.unknown().optional(),
  reportId: z.string().optional()
});