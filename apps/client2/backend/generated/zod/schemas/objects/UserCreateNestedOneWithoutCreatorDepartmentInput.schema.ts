import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorDepartmentInputObjectSchema } from './UserCreateWithoutCreatorDepartmentInput.schema';
import { UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutCreatorDepartmentInput.schema';
import { UserCreateOrConnectWithoutCreatorDepartmentInputObjectSchema } from './UserCreateOrConnectWithoutCreatorDepartmentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatorDepartmentInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorDepartmentInput, Prisma.UserCreateNestedOneWithoutCreatorDepartmentInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorDepartmentInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCreatorDepartmentInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorDepartmentInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
