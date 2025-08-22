import { z } from 'zod';
// prettier-ignore
export const StageResultSchema = z.object({
    id: z.string(),
    stageTypeId: z.string(),
    comment: z.string().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    type: z.unknown(),
    createdBy: z.unknown().nullable(),
    updatedBy: z.unknown().nullable(),
    report: z.unknown().nullable(),
    reportId: z.string().nullable()
}).strict();

export type StageResultType = z.infer<typeof StageResultSchema>;
