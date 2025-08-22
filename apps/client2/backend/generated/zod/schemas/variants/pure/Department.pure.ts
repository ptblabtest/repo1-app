import { z } from 'zod';
// prettier-ignore
export const DepartmentModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    code: z.string(),
    createdBy: z.unknown().nullable(),
    createdById: z.string().nullable(),
    updatedBy: z.unknown().nullable(),
    updatedById: z.string().nullable(),
    users: z.array(z.unknown()),
    permissions: z.array(z.unknown())
}).strict();

export type DepartmentModelType = z.infer<typeof DepartmentModelSchema>;
