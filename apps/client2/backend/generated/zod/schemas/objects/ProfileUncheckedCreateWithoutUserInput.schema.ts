import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const ProfileUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const ProfileUncheckedCreateWithoutUserInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  department: z.string().nullish(),
  position: z.string().nullish(),
  joinDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
