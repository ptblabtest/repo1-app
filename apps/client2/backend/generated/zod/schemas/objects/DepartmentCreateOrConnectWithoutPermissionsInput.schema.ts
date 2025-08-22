import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentCreateWithoutPermissionsInputObjectSchema } from './DepartmentCreateWithoutPermissionsInput.schema';
import { DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema } from './DepartmentUncheckedCreateWithoutPermissionsInput.schema'

export const DepartmentCreateOrConnectWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutPermissionsInput, Prisma.DepartmentCreateOrConnectWithoutPermissionsInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentCreateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema)])
}).strict();
export const DepartmentCreateOrConnectWithoutPermissionsInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentCreateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema)])
}).strict();
