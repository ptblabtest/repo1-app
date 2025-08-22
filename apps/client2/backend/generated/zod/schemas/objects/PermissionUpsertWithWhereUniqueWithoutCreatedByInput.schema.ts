import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithoutCreatedByInputObjectSchema } from './PermissionUpdateWithoutCreatedByInput.schema';
import { PermissionUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PermissionUncheckedUpdateWithoutCreatedByInput.schema';
import { PermissionCreateWithoutCreatedByInputObjectSchema } from './PermissionCreateWithoutCreatedByInput.schema';
import { PermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './PermissionUncheckedCreateWithoutCreatedByInput.schema'

export const PermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionUpsertWithWhereUniqueWithoutCreatedByInput, Prisma.PermissionUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const PermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
