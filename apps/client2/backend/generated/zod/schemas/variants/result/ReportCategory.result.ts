import { z } from 'zod';
// prettier-ignore
export const ReportCategoryResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    code: z.string(),
    parent: z.unknown().nullable(),
    parentId: z.string().nullable(),
    children: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    createdBy: z.unknown().nullable(),
    createdById: z.string().nullable(),
    updatedBy: z.unknown().nullable(),
    updatedById: z.string().nullable(),
    reports: z.array(z.unknown())
}).strict();

export type ReportCategoryResultType = z.infer<typeof ReportCategoryResultSchema>;
