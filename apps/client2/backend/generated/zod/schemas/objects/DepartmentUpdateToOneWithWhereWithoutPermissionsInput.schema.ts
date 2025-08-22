import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema';
import { DepartmentUpdateWithoutPermissionsInputObjectSchema } from './DepartmentUpdateWithoutPermissionsInput.schema';
import { DepartmentUncheckedUpdateWithoutPermissionsInputObjectSchema } from './DepartmentUncheckedUpdateWithoutPermissionsInput.schema'

export const DepartmentUpdateToOneWithWhereWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutPermissionsInput, Prisma.DepartmentUpdateToOneWithWhereWithoutPermissionsInput> = z.object({
  where: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DepartmentUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutPermissionsInputObjectSchema)])
}).strict();
export const DepartmentUpdateToOneWithWhereWithoutPermissionsInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DepartmentUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutPermissionsInputObjectSchema)])
}).strict();
