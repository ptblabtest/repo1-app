import { z } from 'zod';
// prettier-ignore
export const UserPermissionInputSchema = z.object({
    userId: z.string(),
    permissionId: z.string(),
    user: z.unknown(),
    permission: z.unknown(),
    createdBy: z.unknown().optional().nullable(),
    createdById: z.string().optional().nullable(),
    updatedBy: z.unknown().optional().nullable(),
    updatedById: z.string().optional().nullable()
}).strict();

export type UserPermissionInputType = z.infer<typeof UserPermissionInputSchema>;
