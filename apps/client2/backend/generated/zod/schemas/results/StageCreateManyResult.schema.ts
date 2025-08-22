import { z } from 'zod';
export const StageCreateManyResultSchema = z.object({
  count: z.number()
});