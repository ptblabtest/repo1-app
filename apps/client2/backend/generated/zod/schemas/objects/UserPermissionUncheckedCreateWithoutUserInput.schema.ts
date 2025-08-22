import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPermissionUncheckedCreateWithoutUserInput, Prisma.UserPermissionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
export const UserPermissionUncheckedCreateWithoutUserInputObjectZodSchema = z.object({
  id: z.string().optional(),
  permissionId: z.string(),
  createdAt: z.date().optional(),
  createdById: z.string().nullish(),
  updatedById: z.string().nullish()
}).strict();
