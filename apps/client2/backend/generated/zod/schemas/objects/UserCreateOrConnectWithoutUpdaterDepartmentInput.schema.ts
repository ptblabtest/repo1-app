import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateWithoutUpdaterDepartmentInput.schema';
import { UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterDepartmentInput.schema'

export const UserCreateOrConnectWithoutUpdaterDepartmentInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdaterDepartmentInput, Prisma.UserCreateOrConnectWithoutUpdaterDepartmentInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUpdaterDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema)])
}).strict();
