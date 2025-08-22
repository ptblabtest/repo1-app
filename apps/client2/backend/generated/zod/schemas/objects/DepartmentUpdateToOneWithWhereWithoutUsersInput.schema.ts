import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema';
import { DepartmentUpdateWithoutUsersInputObjectSchema } from './DepartmentUpdateWithoutUsersInput.schema';
import { DepartmentUncheckedUpdateWithoutUsersInputObjectSchema } from './DepartmentUncheckedUpdateWithoutUsersInput.schema'

export const DepartmentUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutUsersInput, Prisma.DepartmentUpdateToOneWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DepartmentUpdateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const DepartmentUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DepartmentUpdateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
