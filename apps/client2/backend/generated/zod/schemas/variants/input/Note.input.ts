import { z } from 'zod';
// prettier-ignore
export const NoteInputSchema = z.object({
    description: z.string().optional().nullable(),
    createdBy: z.unknown().optional().nullable(),
    createdById: z.string().optional().nullable(),
    updatedBy: z.unknown().optional().nullable(),
    updatedById: z.string().optional().nullable(),
    report: z.unknown().optional().nullable(),
    reportId: z.string().optional().nullable()
}).strict();

export type NoteInputType = z.infer<typeof NoteInputSchema>;
