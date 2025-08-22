import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithoutUpdatedByInputObjectSchema } from './PermissionUpdateWithoutUpdatedByInput.schema';
import { PermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './PermissionUncheckedUpdateWithoutUpdatedByInput.schema'

export const PermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.PermissionUpdateWithWhereUniqueWithoutUpdatedByInput, Prisma.PermissionUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const PermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
