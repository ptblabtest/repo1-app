import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentCreateManyCreatedByInput, Prisma.DepartmentCreateManyCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  updatedById: z.string().nullish()
}).strict();
export const DepartmentCreateManyCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  updatedById: z.string().nullish()
}).strict();
