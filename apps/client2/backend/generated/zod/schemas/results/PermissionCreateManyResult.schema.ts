import { z } from 'zod';
export const PermissionCreateManyResultSchema = z.object({
  count: z.number()
});