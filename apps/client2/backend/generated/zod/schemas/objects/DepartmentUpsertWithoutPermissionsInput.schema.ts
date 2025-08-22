import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentUpdateWithoutPermissionsInputObjectSchema } from './DepartmentUpdateWithoutPermissionsInput.schema';
import { DepartmentUncheckedUpdateWithoutPermissionsInputObjectSchema } from './DepartmentUncheckedUpdateWithoutPermissionsInput.schema';
import { DepartmentCreateWithoutPermissionsInputObjectSchema } from './DepartmentCreateWithoutPermissionsInput.schema';
import { DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema } from './DepartmentUncheckedCreateWithoutPermissionsInput.schema';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema'

export const DepartmentUpsertWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.DepartmentUpsertWithoutPermissionsInput, Prisma.DepartmentUpsertWithoutPermissionsInput> = z.object({
  update: z.union([z.lazy(() => DepartmentUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutPermissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentCreateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema)]),
  where: z.lazy(() => DepartmentWhereInputObjectSchema).optional()
}).strict();
export const DepartmentUpsertWithoutPermissionsInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => DepartmentUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutPermissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentCreateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema)]),
  where: z.lazy(() => DepartmentWhereInputObjectSchema).optional()
}).strict();
