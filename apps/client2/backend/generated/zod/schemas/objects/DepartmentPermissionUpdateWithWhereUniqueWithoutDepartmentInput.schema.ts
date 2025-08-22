import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUpdateWithoutDepartmentInput.schema';
import { DepartmentPermissionUncheckedUpdateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedUpdateWithoutDepartmentInput.schema'

export const DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInput, Prisma.DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutDepartmentInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpdateWithWhereUniqueWithoutDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutDepartmentInputObjectSchema)])
}).strict();
