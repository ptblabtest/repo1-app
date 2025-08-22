import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorDepartmentInputObjectSchema } from './UserCreateWithoutCreatorDepartmentInput.schema';
import { UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutCreatorDepartmentInput.schema';
import { UserCreateOrConnectWithoutCreatorDepartmentInputObjectSchema } from './UserCreateOrConnectWithoutCreatorDepartmentInput.schema';
import { UserUpsertWithoutCreatorDepartmentInputObjectSchema } from './UserUpsertWithoutCreatorDepartmentInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatorDepartmentInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatorDepartmentInput.schema';
import { UserUpdateWithoutCreatorDepartmentInputObjectSchema } from './UserUpdateWithoutCreatorDepartmentInput.schema';
import { UserUncheckedUpdateWithoutCreatorDepartmentInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorDepartmentInput.schema'

export const UserUpdateOneWithoutCreatorDepartmentNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatorDepartmentNestedInput, Prisma.UserUpdateOneWithoutCreatorDepartmentNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorDepartmentInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorDepartmentInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCreatorDepartmentNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorDepartmentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorDepartmentInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorDepartmentInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentInputObjectSchema)]).optional()
}).strict();
