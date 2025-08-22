import { z } from 'zod';
// prettier-ignore
export const NoteResultSchema = z.object({
    id: z.string(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdBy: z.unknown().nullable(),
    createdById: z.string().nullable(),
    updatedBy: z.unknown().nullable(),
    updatedById: z.string().nullable(),
    report: z.unknown().nullable(),
    reportId: z.string().nullable()
}).strict();

export type NoteResultType = z.infer<typeof NoteResultSchema>;
