import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateWithoutDeptInputObjectSchema } from './PermissionCreateWithoutDeptInput.schema';
import { PermissionUncheckedCreateWithoutDeptInputObjectSchema } from './PermissionUncheckedCreateWithoutDeptInput.schema';
import { PermissionCreateOrConnectWithoutDeptInputObjectSchema } from './PermissionCreateOrConnectWithoutDeptInput.schema';
import { PermissionUpsertWithoutDeptInputObjectSchema } from './PermissionUpsertWithoutDeptInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateToOneWithWhereWithoutDeptInputObjectSchema } from './PermissionUpdateToOneWithWhereWithoutDeptInput.schema';
import { PermissionUpdateWithoutDeptInputObjectSchema } from './PermissionUpdateWithoutDeptInput.schema';
import { PermissionUncheckedUpdateWithoutDeptInputObjectSchema } from './PermissionUncheckedUpdateWithoutDeptInput.schema'

export const PermissionUpdateOneRequiredWithoutDeptNestedInputObjectSchema: z.ZodType<Prisma.PermissionUpdateOneRequiredWithoutDeptNestedInput, Prisma.PermissionUpdateOneRequiredWithoutDeptNestedInput> = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutDeptInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutDeptInputObjectSchema).optional(),
  upsert: z.lazy(() => PermissionUpsertWithoutDeptInputObjectSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PermissionUpdateToOneWithWhereWithoutDeptInputObjectSchema), z.lazy(() => PermissionUpdateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutDeptInputObjectSchema)]).optional()
}).strict();
export const PermissionUpdateOneRequiredWithoutDeptNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutDeptInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutDeptInputObjectSchema).optional(),
  upsert: z.lazy(() => PermissionUpsertWithoutDeptInputObjectSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PermissionUpdateToOneWithWhereWithoutDeptInputObjectSchema), z.lazy(() => PermissionUpdateWithoutDeptInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutDeptInputObjectSchema)]).optional()
}).strict();
