import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorDepartmentInputObjectSchema } from './UserCreateWithoutCreatorDepartmentInput.schema';
import { UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutCreatorDepartmentInput.schema'

export const UserCreateOrConnectWithoutCreatorDepartmentInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorDepartmentInput, Prisma.UserCreateOrConnectWithoutCreatorDepartmentInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCreatorDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema)])
}).strict();
