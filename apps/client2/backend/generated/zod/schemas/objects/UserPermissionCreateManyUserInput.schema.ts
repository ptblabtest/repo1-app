import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionCreateManyUserInputObjectSchema: z.ZodType<Prisma.UserPermissionCreateManyUserInput, Prisma.UserPermissionCreateManyUserInput> = z.object({
  id: z.string().optional(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const UserPermissionCreateManyUserInputObjectZodSchema = z.object({
  id: z.string().optional(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
