import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUpdateWithoutCreatedByInput.schema';
import { DepartmentPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUncheckedUpdateWithoutCreatedByInput.schema';
import { DepartmentPermissionCreateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionCreateWithoutCreatedByInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutCreatedByInput.schema'

export const DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInput, Prisma.DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
