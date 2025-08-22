import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserPermissionWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserPermissionWhereUniqueInput, Prisma.UserPermissionWhereUniqueInput> = z.object({
  id: z.string()
}).strict();
export const UserPermissionWhereUniqueInputObjectZodSchema = z.object({
  id: z.string()
}).strict();
