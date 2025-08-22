import { z } from 'zod';
// prettier-ignore
export const StageInputSchema = z.object({
    stageTypeId: z.string(),
    comment: z.string().optional().nullable(),
    createdById: z.string().optional().nullable(),
    updatedById: z.string().optional().nullable(),
    type: z.unknown(),
    createdBy: z.unknown().optional().nullable(),
    updatedBy: z.unknown().optional().nullable(),
    report: z.unknown().optional().nullable(),
    reportId: z.string().optional().nullable()
}).strict();

export type StageInputType = z.infer<typeof StageInputSchema>;
