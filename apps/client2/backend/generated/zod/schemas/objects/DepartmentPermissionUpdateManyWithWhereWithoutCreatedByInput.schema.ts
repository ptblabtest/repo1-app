import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionScalarWhereInputObjectSchema } from './DepartmentPermissionScalarWhereInput.schema';
import { DepartmentPermissionUpdateManyMutationInputObjectSchema } from './DepartmentPermissionUpdateManyMutationInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutCreatedByInput.schema'

export const DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInput, Prisma.DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
