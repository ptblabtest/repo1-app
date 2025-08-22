import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionCreateWithoutUpdatedByInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutUpdatedByInput.schema'

export const DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateOrConnectWithoutUpdatedByInput, Prisma.DepartmentPermissionCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const DepartmentPermissionCreateOrConnectWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
