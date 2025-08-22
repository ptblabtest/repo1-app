import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionCreateManyUpdatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateManyUpdatedByInput, Prisma.UserPermissionCreateManyUpdatedByInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
export const UserPermissionCreateManyUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
