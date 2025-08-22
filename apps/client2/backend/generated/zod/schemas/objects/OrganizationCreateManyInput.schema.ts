import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const OrganizationCreateManyInputObjectSchema: z.ZodType<Prisma.OrganizationCreateManyInput, Prisma.OrganizationCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string()
}).strict();
export const OrganizationCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string()
}).strict();
