import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateWithoutPermissionInputObjectSchema } from './UserPermissionCreateWithoutPermissionInput.schema';
import { UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './UserPermissionUncheckedCreateWithoutPermissionInput.schema';
import { UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema } from './UserPermissionCreateOrConnectWithoutPermissionInput.schema';
import { UserPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema } from './UserPermissionUpsertWithWhereUniqueWithoutPermissionInput.schema';
import { UserPermissionCreateManyPermissionInputEnvelopeObjectSchema } from './UserPermissionCreateManyPermissionInputEnvelope.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema';
import { UserPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema } from './UserPermissionUpdateWithWhereUniqueWithoutPermissionInput.schema';
import { UserPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema } from './UserPermissionUpdateManyWithWhereWithoutPermissionInput.schema';
import { UserPermissionScalarWhereInputObjectSchema } from './UserPermissionScalarWhereInput.schema'

export const UserPermissionUpdateManyWithoutPermissionNestedInputObjectSchema: z.ZodType<Prisma.UserPermissionUpdateManyWithoutPermissionNestedInput, Prisma.UserPermissionUpdateManyWithoutPermissionNestedInput> = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyPermissionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserPermissionUpdateManyWithoutPermissionNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutPermissionInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutPermissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutPermissionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyPermissionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema), z.lazy(() => UserPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPermissionScalarWhereInputObjectSchema), z.lazy(() => UserPermissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
