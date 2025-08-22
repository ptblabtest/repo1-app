import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionCreateWithoutUpdatedByInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutUpdatedByInput.schema';
import { DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionCreateOrConnectWithoutUpdatedByInput.schema';
import { DepartmentPermissionCreateManyUpdatedByInputEnvelopeObjectSchema } from './DepartmentPermissionCreateManyUpdatedByInputEnvelope.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema'

export const DepartmentPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUncheckedCreateNestedManyWithoutUpdatedByInput, Prisma.DepartmentPermissionUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
