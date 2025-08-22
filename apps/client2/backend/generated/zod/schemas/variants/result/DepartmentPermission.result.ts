import { z } from 'zod';
// prettier-ignore
export const DepartmentPermissionResultSchema = z.object({
    id: z.string(),
    departmentId: z.string(),
    permissionId: z.string(),
    createdAt: z.date(),
    createdBy: z.unknown().nullable(),
    createdById: z.string().nullable(),
    updatedBy: z.unknown().nullable(),
    updatedById: z.string().nullable(),
    department: z.unknown(),
    permission: z.unknown()
}).strict();

export type DepartmentPermissionResultType = z.infer<typeof DepartmentPermissionResultSchema>;
