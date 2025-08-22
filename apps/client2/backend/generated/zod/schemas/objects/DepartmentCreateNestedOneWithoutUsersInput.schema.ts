import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateWithoutUsersInputObjectSchema } from './DepartmentCreateWithoutUsersInput.schema';
import { DepartmentUncheckedCreateWithoutUsersInputObjectSchema } from './DepartmentUncheckedCreateWithoutUsersInput.schema';
import { DepartmentCreateOrConnectWithoutUsersInputObjectSchema } from './DepartmentCreateOrConnectWithoutUsersInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema'

export const DepartmentCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutUsersInput, Prisma.DepartmentCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional()
}).strict();
export const DepartmentCreateNestedOneWithoutUsersInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional()
}).strict();
