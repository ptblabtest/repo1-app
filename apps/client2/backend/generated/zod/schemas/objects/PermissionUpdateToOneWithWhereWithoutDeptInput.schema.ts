import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema';
import { PermissionUpdateWithoutDeptInputObjectSchema } from './PermissionUpdateWithoutDeptInput.schema';
import { PermissionUncheckedUpdateWithoutDeptInputObjectSchema } from './PermissionUncheckedUpdateWithoutDeptInput.schema'

export const PermissionUpdateToOneWithWhereWithoutDeptInputObjectSchema: z.ZodType<Prisma.PermissionUpdateToOneWithWhereWithoutDeptInput, Prisma.PermissionUpdateToOneWithWhereWithoutDeptInput> = z.object({
  where: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PermissionUpdateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutDeptInputObjectSchema)])
}).strict();
export const PermissionUpdateToOneWithWhereWithoutDeptInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PermissionUpdateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutDeptInputObjectSchema)])
}).strict();
