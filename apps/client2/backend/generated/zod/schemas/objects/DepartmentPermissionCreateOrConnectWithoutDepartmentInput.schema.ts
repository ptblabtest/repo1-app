import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionCreateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionCreateWithoutDepartmentInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutDepartmentInput.schema'

export const DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateOrConnectWithoutDepartmentInput, Prisma.DepartmentPermissionCreateOrConnectWithoutDepartmentInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema)])
}).strict();
export const DepartmentPermissionCreateOrConnectWithoutDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutDepartmentInputObjectSchema)])
}).strict();
