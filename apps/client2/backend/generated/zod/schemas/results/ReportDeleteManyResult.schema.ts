import { z } from 'zod';
export const ReportDeleteManyResultSchema = z.object({
  count: z.number()
});