import { z } from 'zod';
// prettier-ignore
export const DepartmentPermissionModelSchema = z.object({
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

export type DepartmentPermissionModelType = z.infer<typeof DepartmentPermissionModelSchema>;
