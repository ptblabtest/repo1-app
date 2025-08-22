import { z } from 'zod';
export const PermissionDeleteManyResultSchema = z.object({
  count: z.number()
});