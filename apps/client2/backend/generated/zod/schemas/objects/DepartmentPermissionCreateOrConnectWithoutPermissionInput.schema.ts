import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionCreateWithoutPermissionInputObjectSchema } from './DepartmentPermissionCreateWithoutPermissionInput.schema';
import { DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './DepartmentPermissionUncheckedCreateWithoutPermissionInput.schema'

export const DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateOrConnectWithoutPermissionInput, Prisma.DepartmentPermissionCreateOrConnectWithoutPermissionInput> = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema)])
}).strict();
export const DepartmentPermissionCreateOrConnectWithoutPermissionInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentPermissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentPermissionCreateWithoutPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionUncheckedCreateWithoutPermissionInputObjectSchema)])
}).strict();
