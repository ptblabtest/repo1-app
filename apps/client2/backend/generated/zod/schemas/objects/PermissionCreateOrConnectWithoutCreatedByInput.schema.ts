import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionCreateWithoutCreatedByInputObjectSchema } from './PermissionCreateWithoutCreatedByInput.schema';
import { PermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './PermissionUncheckedCreateWithoutCreatedByInput.schema'

export const PermissionCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutCreatedByInput, Prisma.PermissionCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const PermissionCreateOrConnectWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
