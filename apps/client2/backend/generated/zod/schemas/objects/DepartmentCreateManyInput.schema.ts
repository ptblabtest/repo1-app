import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentCreateManyInputObjectSchema: z.ZodType<Prisma.DepartmentCreateManyInput, Prisma.DepartmentCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const DepartmentCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
