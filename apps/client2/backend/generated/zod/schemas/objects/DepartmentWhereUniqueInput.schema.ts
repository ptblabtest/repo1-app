import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const DepartmentWhereUniqueInputObjectSchema: z.ZodType<Prisma.DepartmentWhereUniqueInput, Prisma.DepartmentWhereUniqueInput> = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string()
}).strict();
export const DepartmentWhereUniqueInputObjectZodSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string()
}).strict();
