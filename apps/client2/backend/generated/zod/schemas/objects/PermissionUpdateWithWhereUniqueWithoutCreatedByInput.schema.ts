import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithoutCreatedByInputObjectSchema } from './PermissionUpdateWithoutCreatedByInput.schema';
import { PermissionUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PermissionUncheckedUpdateWithoutCreatedByInput.schema'

export const PermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionUpdateWithWhereUniqueWithoutCreatedByInput, Prisma.PermissionUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const PermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
