import { z } from 'zod';
export const DepartmentCreateManyResultSchema = z.object({
  count: z.number()
});