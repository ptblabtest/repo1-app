import { z } from 'zod';
export const OrganizationUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  users: z.array(z.unknown()),
  Report: z.array(z.unknown())
}));