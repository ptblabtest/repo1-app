import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionCreateManyPermissionInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateManyPermissionInput, Prisma.UserPermissionCreateManyPermissionInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const UserPermissionCreateManyPermissionInputObjectZodSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
