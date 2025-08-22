import { z } from 'zod';
// prettier-ignore
export const RoleInputSchema = z.object({
    name: z.string(),
    level: z.number().int(),
    users: z.array(z.unknown())
}).strict();

export type RoleInputType = z.infer<typeof RoleInputSchema>;
