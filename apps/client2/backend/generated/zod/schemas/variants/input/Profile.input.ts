import { z } from 'zod';
// prettier-ignore
export const ProfileInputSchema = z.object({
    name: z.string().optional().nullable(),
    department: z.string().optional().nullable(),
    position: z.string().optional().nullable(),
    joinDate: z.date().optional().nullable(),
    createdBy: z.unknown().optional().nullable(),
    createdById: z.string().optional().nullable(),
    updatedBy: z.unknown().optional().nullable(),
    updatedById: z.string().optional().nullable(),
    user: z.unknown(),
    userId: z.string()
}).strict();

export type ProfileInputType = z.infer<typeof ProfileInputSchema>;
