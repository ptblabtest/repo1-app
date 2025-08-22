import { z } from 'zod';
// prettier-ignore
export const UserPermissionResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    permissionId: z.string(),
    createdAt: z.date(),
    user: z.unknown(),
    permission: z.unknown(),
    createdBy: z.unknown().nullable(),
    createdById: z.string().nullable(),
    updatedBy: z.unknown().nullable(),
    updatedById: z.string().nullable()
}).strict();

export type UserPermissionResultType = z.infer<typeof UserPermissionResultSchema>;
