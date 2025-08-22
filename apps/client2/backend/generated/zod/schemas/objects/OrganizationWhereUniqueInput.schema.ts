import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const OrganizationWhereUniqueInputObjectSchema: z.ZodType<Prisma.OrganizationWhereUniqueInput, Prisma.OrganizationWhereUniqueInput> = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string()
}).strict();
export const OrganizationWhereUniqueInputObjectZodSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string()
}).strict();
