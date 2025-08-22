import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const PermissionResourceActionCompoundUniqueInputObjectSchema: z.ZodType<Prisma.PermissionResourceActionCompoundUniqueInput, Prisma.PermissionResourceActionCompoundUniqueInput> = z.object({
  resource: z.string(),
  action: z.string()
}).strict();
export const PermissionResourceActionCompoundUniqueInputObjectZodSchema = z.object({
  resource: z.string(),
  action: z.string()
}).strict();
