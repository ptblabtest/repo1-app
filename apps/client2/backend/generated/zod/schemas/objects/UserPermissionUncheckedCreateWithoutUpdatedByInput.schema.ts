import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionUncheckedCreateWithoutUpdatedByInput, Prisma.UserPermissionUncheckedCreateWithoutUpdatedByInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
export const UserPermissionUncheckedCreateWithoutUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
