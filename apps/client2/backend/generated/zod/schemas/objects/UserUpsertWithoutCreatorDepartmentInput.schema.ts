import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutCreatorDepartmentInputObjectSchema } from './UserUpdateWithoutCreatorDepartmentInput.schema';
import { UserUncheckedUpdateWithoutCreatorDepartmentInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorDepartmentInput.schema';
import { UserCreateWithoutCreatorDepartmentInputObjectSchema } from './UserCreateWithoutCreatorDepartmentInput.schema';
import { UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutCreatorDepartmentInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutCreatorDepartmentInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCreatorDepartmentInput, Prisma.UserUpsertWithoutCreatorDepartmentInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCreatorDepartmentInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
