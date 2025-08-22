import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUpdateWithoutDepartmentInput.schema';
import { DepartmentPermissionUncheckedUpdateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedUpdateWithoutDepartmentInput.schema';
import { DepartmentPermissionCreateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateWithoutDepartmentInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutDepartmentInput.schema'

export const DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInput, Prisma.DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutDepartmentInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpsertWithWhereUniqueWithoutDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutDepartmentInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema)])
}).strict();
