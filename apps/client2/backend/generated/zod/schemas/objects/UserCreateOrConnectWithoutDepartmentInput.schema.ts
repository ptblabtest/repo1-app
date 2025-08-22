import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDepartmentInputObjectSchema } from './UserCreateWithoutDepartmentInput.schema';
import { UserUncheckedCreateWithoutDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutDepartmentInput.schema'

export const UserCreateOrConnectWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDepartmentInput, Prisma.UserCreateOrConnectWithoutDepartmentInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema)])
}).strict();
