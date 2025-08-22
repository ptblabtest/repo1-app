import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateWithoutUpdaterDepartmentInput.schema';
import { UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterDepartmentInput.schema';
import { UserCreateOrConnectWithoutUpdaterDepartmentInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterDepartmentInput.schema';
import { UserUpsertWithoutUpdaterDepartmentInputObjectSchema } from './UserUpsertWithoutUpdaterDepartmentInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdaterDepartmentInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdaterDepartmentInput.schema';
import { UserUpdateWithoutUpdaterDepartmentInputObjectSchema } from './UserUpdateWithoutUpdaterDepartmentInput.schema';
import { UserUncheckedUpdateWithoutUpdaterDepartmentInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterDepartmentInput.schema'

export const UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdaterDepartmentNestedInput, Prisma.UserUpdateOneWithoutUpdaterDepartmentNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterDepartmentInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterDepartmentInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUpdaterDepartmentNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterDepartmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterDepartmentInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterDepartmentInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentInputObjectSchema)]).optional()
}).strict();
