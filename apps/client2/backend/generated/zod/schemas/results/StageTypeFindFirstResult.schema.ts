import { z } from 'zod';
export const StageTypeFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  model: z.string(),
  order: z.number().int(),
  value: z.string(),
  label: z.string(),
  stages: z.array(z.unknown())
}));