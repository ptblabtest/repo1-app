import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserPermissionCreateWithoutUserInputObjectSchema } from './UserPermissionCreateWithoutUserInput.schema';
import { UserPermissionUncheckedCreateWithoutUserInputObjectSchema } from './UserPermissionUncheckedCreateWithoutUserInput.schema';
import { UserPermissionCreateOrConnectWithoutUserInputObjectSchema } from './UserPermissionCreateOrConnectWithoutUserInput.schema';
import { UserPermissionCreateManyUserInputEnvelopeObjectSchema } from './UserPermissionCreateManyUserInputEnvelope.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './UserPermissionWhereUniqueInput.schema'

export const UserPermissionUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPermissionUncheckedCreateNestedManyWithoutUserInput, Prisma.UserPermissionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserPermissionUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserPermissionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPermissionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserPermissionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPermissionCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPermissionWhereUniqueInputObjectSchema), z.lazy(() => UserPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
