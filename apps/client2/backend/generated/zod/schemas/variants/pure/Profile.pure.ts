import { z } from 'zod';
// prettier-ignore
export const ProfileModelSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    department: z.string().nullable(),
    position: z.string().nullable(),
    joinDate: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdBy: z.unknown().nullable(),
    createdById: z.string().nullable(),
    updatedBy: z.unknown().nullable(),
    updatedById: z.string().nullable(),
    user: z.unknown(),
    userId: z.string()
}).strict();

export type ProfileModelType = z.infer<typeof ProfileModelSchema>;
