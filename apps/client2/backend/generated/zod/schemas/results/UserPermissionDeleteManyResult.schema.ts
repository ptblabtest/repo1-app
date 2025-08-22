import { z } from 'zod';
export const UserPermissionDeleteManyResultSchema = z.object({
  count: z.number()
});