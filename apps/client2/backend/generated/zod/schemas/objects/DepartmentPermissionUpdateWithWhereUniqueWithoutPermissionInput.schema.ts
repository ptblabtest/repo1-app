import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithoutPermissionInputObjectSchema } from './DepartmentPermissionUpdateWithoutPermissionInput.schema';
import { DepartmentPermissionUncheckedUpdateWithoutPermissionInputObjectSchema } from './DepartmentPermissionUncheckedUpdateWithoutPermissionInput.schema'

export const DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInput, Prisma.DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutPermissionInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutPermissionInputObjectSchema)])
}).strict();
