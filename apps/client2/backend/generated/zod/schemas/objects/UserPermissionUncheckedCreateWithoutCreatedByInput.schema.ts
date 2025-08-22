import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUncheckedCreateWithoutCreatedByInput, Prisma.UserPermissionUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
export const UserPermissionUncheckedCreateWithoutCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
