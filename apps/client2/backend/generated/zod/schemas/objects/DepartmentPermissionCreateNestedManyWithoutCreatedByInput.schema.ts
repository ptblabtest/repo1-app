import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionCreateWithoutCreatedByInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutCreatedByInput.schema';
import { DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema } from './DepartmentPermissionCreateOrConnectWithoutCreatedByInput.schema';
import { DepartmentPermissionCreateManyCreatedByInputEnvelopeObjectSchema } from './DepartmentPermissionCreateManyCreatedByInputEnvelope.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema'

export const DepartmentPermissionCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateNestedManyWithoutCreatedByInput, Prisma.DepartmentPermissionCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentPermissionCreateNestedManyWithoutCreatedByInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
