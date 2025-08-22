import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateWithoutDepartmentInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutDepartmentInput.schema';
import { DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateOrConnectWithoutDepartmentInput.schema';
import { DepartmentPermissionCreateManyDepartmentInputEnvelopeObjectSchema } from './DepartmentPermissionCreateManyDepartmentInputEnvelope.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema'

export const DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateNestedManyWithoutDepartmentInput, Prisma.DepartmentPermissionCreateNestedManyWithoutDepartmentInput> = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyDepartmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentPermissionCreateNestedManyWithoutDepartmentInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyDepartmentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
