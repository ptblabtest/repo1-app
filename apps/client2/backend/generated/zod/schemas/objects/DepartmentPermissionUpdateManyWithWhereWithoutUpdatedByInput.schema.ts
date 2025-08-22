import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionScalarWhereInputObjectSchema } from './DepartmentPermissionScalarWhereInput.schema';
import { DepartmentPermissionUpdateManyMutationInputObjectSchema } from './DepartmentPermissionUpdateManyMutationInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutUpdatedByInput.schema'

export const DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInput, Prisma.DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
