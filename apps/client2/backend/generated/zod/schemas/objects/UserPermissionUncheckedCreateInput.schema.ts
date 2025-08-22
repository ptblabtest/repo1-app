import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserPermissionUncheckedCreateInput, Prisma.UserPermissionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const UserPermissionUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
