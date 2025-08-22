import { z } from 'zod';
// prettier-ignore
export const PermissionInputSchema = z.object({
    name: z.string(),
    resource: z.string(),
    action: z.string(),
    description: z.string().optional().nullable(),
    createdBy: z.unknown().optional().nullable(),
    createdById: z.string().optional().nullable(),
    updatedBy: z.unknown().optional().nullable(),
    updatedById: z.string().optional().nullable(),
    dept: z.array(z.unknown()),
    users: z.array(z.unknown())
}).strict();

export type PermissionInputType = z.infer<typeof PermissionInputSchema>;
