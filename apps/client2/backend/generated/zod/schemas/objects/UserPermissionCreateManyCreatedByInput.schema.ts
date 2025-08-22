import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateManyCreatedByInput, Prisma.UserPermissionCreateManyCreatedByInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
export const UserPermissionCreateManyCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
