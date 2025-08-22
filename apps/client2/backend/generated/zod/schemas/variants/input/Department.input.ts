import { z } from 'zod';
// prettier-ignore
export const DepartmentInputSchema = z.object({
    name: z.string(),
    code: z.string(),
    createdBy: z.unknown().optional().nullable(),
    createdById: z.string().optional().nullable(),
    updatedBy: z.unknown().optional().nullable(),
    updatedById: z.string().optional().nullable(),
    users: z.array(z.unknown()),
    permissions: z.array(z.unknown())
}).strict();

export type DepartmentInputType = z.infer<typeof DepartmentInputSchema>;
