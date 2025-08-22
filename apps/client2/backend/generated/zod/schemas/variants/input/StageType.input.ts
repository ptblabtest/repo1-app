import { z } from 'zod';
// prettier-ignore
export const StageTypeInputSchema = z.object({
    model: z.string(),
    order: z.number().int(),
    value: z.string(),
    label: z.string(),
    stages: z.array(z.unknown())
}).strict();

export type StageTypeInputType = z.infer<typeof StageTypeInputSchema>;
