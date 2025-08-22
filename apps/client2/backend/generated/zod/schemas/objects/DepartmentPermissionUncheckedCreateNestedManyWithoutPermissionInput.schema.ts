import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateWithoutPermissionInputObjectSchema } from './DepartmentPermissionCreateWithoutPermissionInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutPermissionInput.schema';
import { DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema } from './DepartmentPermissionCreateOrConnectWithoutPermissionInput.schema';
import { DepartmentPermissionCreateManyPermissionInputEnvelopeObjectSchema } from './DepartmentPermissionCreateManyPermissionInputEnvelope.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema'

export const DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInput, Prisma.DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInput> = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyPermissionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DepartmentPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema).array(), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DepartmentPermissionCreateManyPermissionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema), z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
