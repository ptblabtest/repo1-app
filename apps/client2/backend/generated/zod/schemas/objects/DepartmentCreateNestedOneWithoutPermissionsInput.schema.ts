import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateWithoutPermissionsInputObjectSchema } from './DepartmentCreateWithoutPermissionsInput.schema';
import { DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema } from './DepartmentUncheckedCreateWithoutPermissionsInput.schema';
import { DepartmentCreateOrConnectWithoutPermissionsInputObjectSchema } from './DepartmentCreateOrConnectWithoutPermissionsInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema'

export const DepartmentCreateNestedOneWithoutPermissionsInputObjectSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutPermissionsInput, Prisma.DepartmentCreateNestedOneWithoutPermissionsInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional()
}).strict();
export const DepartmentCreateNestedOneWithoutPermissionsInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional()
}).strict();
