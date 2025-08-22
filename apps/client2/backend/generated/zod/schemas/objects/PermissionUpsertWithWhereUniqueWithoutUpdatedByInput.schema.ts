import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithoutUpdatedByInputObjectSchema } from './PermissionUpdateWithoutUpdatedByInput.schema';
import { PermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './PermissionUncheckedUpdateWithoutUpdatedByInput.schema';
import { PermissionCreateWithoutUpdatedByInputObjectSchema } from './PermissionCreateWithoutUpdatedByInput.schema';
import { PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PermissionUncheckedCreateWithoutUpdatedByInput.schema'

export const PermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.PermissionUpsertWithWhereUniqueWithoutUpdatedByInput, Prisma.PermissionUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const PermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
