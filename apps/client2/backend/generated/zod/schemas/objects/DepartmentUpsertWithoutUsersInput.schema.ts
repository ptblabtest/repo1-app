import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentUpdateWithoutUsersInputObjectSchema } from './DepartmentUpdateWithoutUsersInput.schema';
import { DepartmentUncheckedUpdateWithoutUsersInputObjectSchema } from './DepartmentUncheckedUpdateWithoutUsersInput.schema';
import { DepartmentCreateWithoutUsersInputObjectSchema } from './DepartmentCreateWithoutUsersInput.schema';
import { DepartmentUncheckedCreateWithoutUsersInputObjectSchema } from './DepartmentUncheckedCreateWithoutUsersInput.schema';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema'

export const DepartmentUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.DepartmentUpsertWithoutUsersInput, Prisma.DepartmentUpsertWithoutUsersInput> = z.object({
  update: z.union([z.lazy(() => DepartmentUpdateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentCreateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => DepartmentWhereInputObjectSchema).optional()
}).strict();
export const DepartmentUpsertWithoutUsersInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => DepartmentUpdateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentCreateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => DepartmentWhereInputObjectSchema).optional()
}).strict();
