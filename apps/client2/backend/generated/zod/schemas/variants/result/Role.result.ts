import { z } from 'zod';
// prettier-ignore
export const RoleResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    level: z.number().int(),
    users: z.array(z.unknown())
}).strict();

export type RoleResultType = z.infer<typeof RoleResultSchema>;
