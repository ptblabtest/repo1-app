import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutDepartmentInputObjectSchema } from './UserCreateWithoutDepartmentInput.schema';
import { UserUncheckedCreateWithoutDepartmentInputObjectSchema } from './UserUncheckedCreateWithoutDepartmentInput.schema';
import { UserCreateOrConnectWithoutDepartmentInputObjectSchema } from './UserCreateOrConnectWithoutDepartmentInput.schema';
import { UserCreateManyDepartmentInputEnvelopeObjectSchema } from './UserCreateManyDepartmentInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserUncheckedCreateNestedManyWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutDepartmentInput, Prisma.UserUncheckedCreateNestedManyWithoutDepartmentInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutDepartmentInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutDepartmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyDepartmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedCreateNestedManyWithoutDepartmentInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserCreateWithoutDepartmentInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDepartmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutDepartmentInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutDepartmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyDepartmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
