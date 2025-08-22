import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionCreateWithoutUpdatedByInputObjectSchema } from './PermissionCreateWithoutUpdatedByInput.schema';
import { PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PermissionUncheckedCreateWithoutUpdatedByInput.schema'

export const PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutUpdatedByInput, Prisma.PermissionCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const PermissionCreateOrConnectWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
