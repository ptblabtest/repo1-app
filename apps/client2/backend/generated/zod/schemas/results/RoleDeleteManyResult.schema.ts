import { z } from 'zod';
export const RoleDeleteManyResultSchema = z.object({
  count: z.number()
});