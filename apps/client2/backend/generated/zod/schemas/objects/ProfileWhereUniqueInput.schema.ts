import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ProfileWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProfileWhereUniqueInput, Prisma.ProfileWhereUniqueInput> = z.object({
  id: z.string(),
  userId: z.string()
}).strict();
export const ProfileWhereUniqueInputObjectZodSchema = z.object({
  id: z.string(),
  userId: z.string()
}).strict();
