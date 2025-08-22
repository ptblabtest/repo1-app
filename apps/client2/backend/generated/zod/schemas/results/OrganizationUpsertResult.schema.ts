import { z } from 'zod';
export const OrganizationUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  users: z.array(z.unknown()),
  Report: z.array(z.unknown())
});