import { z } from 'zod';
export const RoleCreateManyResultSchema = z.object({
  count: z.number()
});