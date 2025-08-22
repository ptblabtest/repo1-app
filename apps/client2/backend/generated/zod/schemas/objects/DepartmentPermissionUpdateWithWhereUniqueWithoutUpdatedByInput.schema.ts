import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUpdateWithoutUpdatedByInput.schema';
import { DepartmentPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUncheckedUpdateWithoutUpdatedByInput.schema'

export const DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInput, Prisma.DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
