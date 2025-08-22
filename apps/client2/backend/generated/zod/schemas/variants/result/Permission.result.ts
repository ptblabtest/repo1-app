import { z } from 'zod';
// prettier-ignore
export const PermissionResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    resource: z.string(),
    action: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    createdBy: z.unknown().nullable(),
    createdById: z.string().nullable(),
    updatedBy: z.unknown().nullable(),
    updatedById: z.string().nullable(),
    dept: z.array(z.unknown()),
    users: z.array(z.unknown())
}).strict();

export type PermissionResultType = z.infer<typeof PermissionResultSchema>;
