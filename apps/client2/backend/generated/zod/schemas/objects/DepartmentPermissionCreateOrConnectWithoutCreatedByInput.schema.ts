import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionCreateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionCreateWithoutCreatedByInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutCreatedByInput.schema'

export const DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateOrConnectWithoutCreatedByInput, Prisma.DepartmentPermissionCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const DepartmentPermissionCreateOrConnectWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
