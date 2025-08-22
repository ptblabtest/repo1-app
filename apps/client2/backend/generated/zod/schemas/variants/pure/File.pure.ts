import { z } from 'zod';
// prettier-ignore
export const FileModelSchema = z.object({
    id: z.string(),
    filename: z.string(),
    path: z.string(),
    mimeType: z.string().nullable(),
    size: z.number().int().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    report: z.unknown().nullable(),
    reportId: z.string().nullable()
}).strict();

export type FileModelType = z.infer<typeof FileModelSchema>;
