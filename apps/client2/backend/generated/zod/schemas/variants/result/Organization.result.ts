import { z } from 'zod';
// prettier-ignore
export const OrganizationResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    code: z.string(),
    users: z.array(z.unknown()),
    Report: z.array(z.unknown())
}).strict();

export type OrganizationResultType = z.infer<typeof OrganizationResultSchema>;
