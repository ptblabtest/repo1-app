import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDepartmentInputObjectSchema } from './UserUpdateWithoutDepartmentInput.schema';
import { UserUncheckedUpdateWithoutDepartmentInputObjectSchema } from './UserUncheckedUpdateWithoutDepartmentInput.schema';
import { UserCreateWithoutDepartmentInputObjectSchema } from './UserCreateWithoutDepartmentInput.schema';
import { UserUncheckedCreateWithoutDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutDepartmentInput.schema'

export const UserUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput, Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDepartmentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDepartmentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema)])
}).strict();
