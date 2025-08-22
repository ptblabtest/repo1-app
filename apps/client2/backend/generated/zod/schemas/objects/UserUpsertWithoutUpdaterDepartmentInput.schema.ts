import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUpdaterDepartmentInputObjectSchema } from './UserUpdateWithoutUpdaterDepartmentInput.schema';
import { UserUncheckedUpdateWithoutUpdaterDepartmentInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterDepartmentInput.schema';
import { UserCreateWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateWithoutUpdaterDepartmentInput.schema';
import { UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterDepartmentInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutUpdaterDepartmentInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUpdaterDepartmentInput, Prisma.UserUpsertWithoutUpdaterDepartmentInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUpdaterDepartmentInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
