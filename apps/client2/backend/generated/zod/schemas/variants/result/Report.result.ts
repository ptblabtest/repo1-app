import { z } from 'zod';
// prettier-ignore
export const ReportResultSchema = z.object({
    id: z.string(),
    category: z.unknown(),
    categoryId: z.string(),
    periodYear: z.string(),
    periodMonth: z.string(),
    periodDate: z.string().nullable(),
    version: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    createdBy: z.unknown().nullable(),
    createdById: z.string().nullable(),
    updatedBy: z.unknown().nullable(),
    updatedById: z.string().nullable(),
    organization: z.unknown().nullable(),
    organizationId: z.string().nullable(),
    notes: z.array(z.unknown()),
    stages: z.array(z.unknown()),
    files: z.array(z.unknown())
}).strict();

export type ReportResultType = z.infer<typeof ReportResultSchema>;
