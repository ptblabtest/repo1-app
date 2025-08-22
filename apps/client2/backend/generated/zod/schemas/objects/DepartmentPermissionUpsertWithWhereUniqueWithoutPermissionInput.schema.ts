import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionUpdateWithoutPermissionInputObjectSchema } from './DepartmentPermissionUpdateWithoutPermissionInput.schema';
import { DepartmentPermissionUncheckedUpdateWithoutPermissionInputObjectSchema } from './DepartmentPermissionUncheckedUpdateWithoutPermissionInput.schema';
import { DepartmentPermissionCreateWithoutPermissionInputObjectSchema } from './DepartmentPermissionCreateWithoutPermissionInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutPermissionInput.schema'

export const DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInput, Prisma.DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema)])
}).strict();
export const DepartmentPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentPermissionUpdateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedUpdateWithoutPermissionInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema)])
}).strict();
