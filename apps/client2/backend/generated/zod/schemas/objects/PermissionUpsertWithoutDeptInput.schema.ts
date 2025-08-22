import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionUpdateWithoutDeptInputObjectSchema } from './PermissionUpdateWithoutDeptInput.schema';
import { PermissionUncheckedUpdateWithoutDeptInputObjectSchema } from './PermissionUncheckedUpdateWithoutDeptInput.schema';
import { PermissionCreateWithoutDeptInputObjectSchema } from './PermissionCreateWithoutDeptInput.schema';
import { PermissionUncheckedCreateWithoutDeptInputObjectSchema } from './PermissionUncheckedCreateWithoutDeptInput.schema';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema'

export const PermissionUpsertWithoutDeptInputObjectSchema: z.ZodType<Prisma.PermissionUpsertWithoutDeptInput, Prisma.PermissionUpsertWithoutDeptInput> = z.object({
  update: z.union([z.lazy(() => PermissionUpdateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutDeptInputObjectSchema)]),
  create: z.union([z.lazy(() => PermissionCreateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutDeptInputObjectSchema)]),
  where: z.lazy(() => PermissionWhereInputObjectSchema).optional()
}).strict();
export const PermissionUpsertWithoutDeptInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => PermissionUpdateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutDeptInputObjectSchema)]),
  create: z.union([z.lazy(() => PermissionCreateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutDeptInputObjectSchema)]),
  where: z.lazy(() => PermissionWhereInputObjectSchema).optional()
}).strict();
