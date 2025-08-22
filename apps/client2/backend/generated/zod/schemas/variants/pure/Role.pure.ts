import { z } from 'zod';
// prettier-ignore
export const RoleModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    level: z.number().int(),
    users: z.array(z.unknown())
}).strict();

export type RoleModelType = z.infer<typeof RoleModelSchema>;
