import { z } from 'zod';
// prettier-ignore
export const DepartmentPermissionInputSchema = z.object({
    departmentId: z.string(),
    permissionId: z.string(),
    createdBy: z.unknown().optional().nullable(),
    createdById: z.string().optional().nullable(),
    updatedBy: z.unknown().optional().nullable(),
    updatedById: z.string().optional().nullable(),
    department: z.unknown(),
    permission: z.unknown()
}).strict();

export type DepartmentPermissionInputType = z.infer<typeof DepartmentPermissionInputSchema>;
