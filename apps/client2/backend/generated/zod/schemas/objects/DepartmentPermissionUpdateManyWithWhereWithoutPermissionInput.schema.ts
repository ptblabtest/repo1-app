import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionScalarWhereInputObjectSchema } from './DepartmentPermissionScalarWhereInput.schema';
import { DepartmentPermissionUpdateManyMutationInputObjectSchema } from './DepartmentPermissionUpdateManyMutationInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutPermissionInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutPermissionInput.schema'

export const DepartmentPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateManyWithWhereWithoutPermissionInput, Prisma.DepartmentPermissionUpdateManyWithWhereWithoutPermissionInput> = z.object({
  where: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutPermissionInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpdateManyWithWhereWithoutPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateManyMutationInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutPermissionInputObjectSchema)])
}).strict();
