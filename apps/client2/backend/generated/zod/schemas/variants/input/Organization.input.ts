import { z } from 'zod';
// prettier-ignore
export const OrganizationInputSchema = z.object({
    name: z.string(),
    code: z.string(),
    users: z.array(z.unknown()),
    Report: z.array(z.unknown())
}).strict();

export type OrganizationInputType = z.infer<typeof OrganizationInputSchema>;
