import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionCreateWithoutDeptInputObjectSchema } from './PermissionCreateWithoutDeptInput.schema';
import { PermissionUncheckedCreateWithoutDeptInputObjectSchema } from './PermissionUncheckedCreateWithoutDeptInput.schema'

export const PermissionCreateOrConnectWithoutDeptInputObjectSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutDeptInput, Prisma.PermissionCreateOrConnectWithoutDeptInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PermissionCreateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutDeptInputObjectSchema)])
}).strict();
export const PermissionCreateOrConnectWithoutDeptInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PermissionCreateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutDeptInputObjectSchema)])
}).strict();
