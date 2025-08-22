import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionResourceActionCompoundUniqueInputObjectSchema } from './PermissionResourceActionCompoundUniqueInput.schema'

export const PermissionWhereUniqueInputObjectSchema: z.ZodType<Prisma.PermissionWhereUniqueInput, Prisma.PermissionWhereUniqueInput> = z.object({
  id: z.string(),
  name: z.string(),
  resource_action: z.lazy(() => PermissionResourceActionCompoundUniqueInputObjectSchema)
}).strict();
export const PermissionWhereUniqueInputObjectZodSchema = z.object({
  id: z.string(),
  name: z.string(),
  resource_action: z.lazy(() => PermissionResourceActionCompoundUniqueInputObjectSchema)
}).strict();
