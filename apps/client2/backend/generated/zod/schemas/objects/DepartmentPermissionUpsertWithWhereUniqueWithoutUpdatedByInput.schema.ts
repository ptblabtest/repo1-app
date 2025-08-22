import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUpdateWithoutUpdatedByInput.schema';
import { DepartmentPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUncheckedUpdateWithoutUpdatedByInput.schema';
import { DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionCreateWithoutUpdatedByInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutUpdatedByInput.schema'

export const DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInput, Prisma.DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
