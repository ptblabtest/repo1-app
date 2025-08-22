import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateWithoutDeptInputObjectSchema } from './PermissionCreateWithoutDeptInput.schema';
import { PermissionUncheckedCreateWithoutDeptInputObjectSchema } from './PermissionUncheckedCreateWithoutDeptInput.schema';
import { PermissionCreateOrConnectWithoutDeptInputObjectSchema } from './PermissionCreateOrConnectWithoutDeptInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema'

export const PermissionCreateNestedOneWithoutDeptInputObjectSchema: z.ZodType<Prisma.PermissionCreateNestedOneWithoutDeptInput, Prisma.PermissionCreateNestedOneWithoutDeptInput> = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutDeptInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutDeptInputObjectSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional()
}).strict();
export const PermissionCreateNestedOneWithoutDeptInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutDeptInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutDeptInputObjectSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional()
}).strict();
