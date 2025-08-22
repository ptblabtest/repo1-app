import { z } from 'zod';
// prettier-ignore
export const ReportInputSchema = z.object({
    category: z.unknown(),
    categoryId: z.string(),
    periodYear: z.string(),
    periodMonth: z.string(),
    periodDate: z.string().optional().nullable(),
    version: z.number().int(),
    createdBy: z.unknown().optional().nullable(),
    createdById: z.string().optional().nullable(),
    updatedBy: z.unknown().optional().nullable(),
    updatedById: z.string().optional().nullable(),
    organization: z.unknown().optional().nullable(),
    organizationId: z.string().optional().nullable(),
    notes: z.array(z.unknown()),
    stages: z.array(z.unknown()),
    files: z.array(z.unknown())
}).strict();

export type ReportInputType = z.infer<typeof ReportInputSchema>;
