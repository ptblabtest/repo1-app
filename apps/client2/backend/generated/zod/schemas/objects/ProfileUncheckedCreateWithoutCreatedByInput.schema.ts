import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ProfileUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutCreatedByInput, Prisma.ProfileUncheckedCreateWithoutCreatedByInput> = z.object({
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
export const ProfileUncheckedCreateWithoutCreatedByInputObjectZodSchema = z.object({
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
