import { z } from 'zod';
export const RoleUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  level: z.number().int(),
  users: z.array(z.unknown())
});