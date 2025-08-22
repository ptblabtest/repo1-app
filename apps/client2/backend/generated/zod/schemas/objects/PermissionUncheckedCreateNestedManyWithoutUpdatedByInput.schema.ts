import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateWithoutUpdatedByInputObjectSchema } from './PermissionCreateWithoutUpdatedByInput.schema';
import { PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './PermissionUncheckedCreateWithoutUpdatedByInput.schema';
import { PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema } from './PermissionCreateOrConnectWithoutUpdatedByInput.schema';
import { PermissionCreateManyUpdatedByInputEnvelopeObjectSchema } from './PermissionCreateManyUpdatedByInputEnvelope.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema'

export const PermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.PermissionUncheckedCreateNestedManyWithoutUpdatedByInput, Prisma.PermissionUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PermissionWhereUniqueInputObjectSchema), z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
