import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateWithoutUserInputObjectSchema } from './UserPermissionCreateWithoutUserInput.schema';
import { UserPermissionUncheckedCreateWithoutUserInputObjectSchema } from './UserPermissionUncheckedCreateWithoutUserInput.schema';
import { UserPermissionCreateOrConnectWithoutUserInputObjectSchema } from './UserPermissionCreateOrConnectWithoutUserInput.schema';
import { UserPermissionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserPermissionUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserPermissionCreateManyUserInputEnvelopeObjectSchema } from './UserPermissionCreateManyUserInputEnvelope.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserPermissionUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserPermissionUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserPermissionUpdateManyWithWhereWithoutUserInput.schema';
import { UserPermissionScalarWhereInputObjectSchema } from './UserPermissionScalarWhereInput.schema'

export const UserPermissionUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateManyWithoutUserNestedInput, Prisma.UserPermissionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPermissionUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserPermissionUpdateManyWithoutUserNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPermissionUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
