import { z } from 'zod';
// prettier-ignore
export const StageTypeModelSchema = z.object({
    id: z.string(),
    model: z.string(),
    order: z.number().int(),
    value: z.string(),
    label: z.string(),
    stages: z.array(z.unknown())
}).strict();

export type StageTypeModelType = z.infer<typeof StageTypeModelSchema>;
