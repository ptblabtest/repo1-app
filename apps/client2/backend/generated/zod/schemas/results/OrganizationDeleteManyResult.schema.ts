import { z } from 'zod';
export const OrganizationDeleteManyResultSchema = z.object({
  count: z.number()
});