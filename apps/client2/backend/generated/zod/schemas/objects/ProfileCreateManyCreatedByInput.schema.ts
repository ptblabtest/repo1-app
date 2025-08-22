import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ProfileCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.ProfileCreateManyCreatedByInput, Prisma.ProfileCreateManyCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedById: z.string().nullish(),
  userId: z.string()
}).strict();
export const ProfileCreateManyCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  updatedById: z.string().nullish(),
  userId: z.string()
}).strict();
