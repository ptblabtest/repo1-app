import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUpdateWithoutCreatedByInput.schema';
import { DepartmentPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUncheckedUpdateWithoutCreatedByInput.schema'

export const DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInput, Prisma.DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
