import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionScalarWhereInputObjectSchema } from './DepartmentPermissionScalarWhereInput.schema';
import { DepartmentPermissionUpdateManyMutationInputObjectSchema } from './DepartmentPermissionUpdateManyMutationInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutDepartmentInput.schema'

export const DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInput, Prisma.DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInput> = z.object({
  where: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutDepartmentInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpdateManyWithWhereWithoutDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutDepartmentInputObjectSchema)])
}).strict();
