import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateWithoutUpdaterDepartmentInput.schema';
import { UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterDepartmentInput.schema';
import { UserCreateOrConnectWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterDepartmentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutUpdaterDepartmentInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdaterDepartmentInput, Prisma.UserCreateNestedOneWithoutUpdaterDepartmentInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterDepartmentInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUpdaterDepartmentInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterDepartmentInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
