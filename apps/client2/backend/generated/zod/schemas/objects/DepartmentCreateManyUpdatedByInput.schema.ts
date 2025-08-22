import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentCreateManyUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentCreateManyUpdatedByInput, Prisma.DepartmentCreateManyUpdatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish()
}).strict();
export const DepartmentCreateManyUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish()
}).strict();
