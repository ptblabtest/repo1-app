import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutDepartmentInputObjectSchema } from './UserCreateWithoutDepartmentInput.schema';
import { UserUncheckedCreateWithoutDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutDepartmentInput.schema';
import { UserCreateOrConnectWithoutDepartmentInputObjectSchema } from './UserCreateOrConnectWithoutDepartmentInput.schema';
import { UserUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutDepartmentInput.schema';
import { UserCreateManyDepartmentInputEnvelopeObjectSchema } from './UserCreateManyDepartmentInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutDepartmentInput.schema';
import { UserUpdateManyWithWhereWithoutDepartmentInputObjectSchema } from './UserUpdateManyWithWhereWithoutDepartmentInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

export const UserUpdateManyWithoutDepartmentNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithoutDepartmentNestedInput, Prisma.UserUpdateManyWithoutDepartmentNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutDepartmentInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutDepartmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyDepartmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutDepartmentInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutDepartmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUpdateManyWithoutDepartmentNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutDepartmentInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutDepartmentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutDepartmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyDepartmentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutDepartmentInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutDepartmentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
