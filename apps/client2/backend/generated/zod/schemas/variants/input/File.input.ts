import { z } from 'zod';
// prettier-ignore
export const FileInputSchema = z.object({
    filename: z.string(),
    path: z.string(),
    mimeType: z.string().optional().nullable(),
    size: z.number().int().optional().nullable(),
    report: z.unknown().optional().nullable(),
    reportId: z.string().optional().nullable()
}).strict();

export type FileInputType = z.infer<typeof FileInputSchema>;
