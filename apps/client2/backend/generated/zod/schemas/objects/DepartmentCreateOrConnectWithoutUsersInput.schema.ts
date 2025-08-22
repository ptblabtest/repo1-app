import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentCreateWithoutUsersInputObjectSchema } from './DepartmentCreateWithoutUsersInput.schema';
import { DepartmentUncheckedCreateWithoutUsersInputObjectSchema } from './DepartmentUncheckedCreateWithoutUsersInput.schema'

export const DepartmentCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutUsersInput, Prisma.DepartmentCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentCreateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const DepartmentCreateOrConnectWithoutUsersInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentCreateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
