import { z } from 'zod';
// prettier-ignore
export const ReportCategoryInputSchema = z.object({
    name: z.string(),
    code: z.string(),
    parent: z.unknown().optional().nullable(),
    parentId: z.string().optional().nullable(),
    children: z.array(z.unknown()),
    createdBy: z.unknown().optional().nullable(),
    createdById: z.string().optional().nullable(),
    updatedBy: z.unknown().optional().nullable(),
    updatedById: z.string().optional().nullable(),
    reports: z.array(z.unknown())
}).strict();

export type ReportCategoryInputType = z.infer<typeof ReportCategoryInputSchema>;
