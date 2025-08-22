import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateWithoutCreatedByInputObjectSchema } from './PermissionCreateWithoutCreatedByInput.schema';
import { PermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './PermissionUncheckedCreateWithoutCreatedByInput.schema';
import { PermissionCreateOrConnectWithoutCreatedByInputObjectSchema } from './PermissionCreateOrConnectWithoutCreatedByInput.schema';
import { PermissionCreateManyCreatedByInputEnvelopeObjectSchema } from './PermissionCreateManyCreatedByInputEnvelope.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema'

export const PermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionUncheckedCreateNestedManyWithoutCreatedByInput, Prisma.PermissionUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
