import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ProfileUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutUpdatedByInput, Prisma.ProfileUncheckedCreateWithoutUpdatedByInput> = z.object({
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
export const ProfileUncheckedCreateWithoutUpdatedByInputObjectZodSchema = z.object({
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
