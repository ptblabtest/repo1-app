import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema: z.ZodType<Prisma.UserPermissionUncheckedCreateWithoutPermissionInput, Prisma.UserPermissionUncheckedCreateWithoutPermissionInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const UserPermissionUncheckedCreateWithoutPermissionInputObjectZodSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
