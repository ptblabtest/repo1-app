import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ProfileCreateManyInputObjectSchema: z.ZodType<Prisma.ProfileCreateManyInput, Prisma.ProfileCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  userId: z.string()
}).strict();
export const ProfileCreateManyInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish(),
  userId: z.string()
}).strict();
