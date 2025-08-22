import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ProfileCreateManyUpdatedByInputObjectSchema: z.ZodType<Prisma.ProfileCreateManyUpdatedByInput, Prisma.ProfileCreateManyUpdatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  userId: z.string()
}).strict();
export const ProfileCreateManyUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  userId: z.string()
}).strict();
