import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateWithoutPermissionsInputObjectSchema } from './DepartmentCreateWithoutPermissionsInput.schema';
import { DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema } from './DepartmentUncheckedCreateWithoutPermissionsInput.schema';
import { DepartmentCreateOrConnectWithoutPermissionsInputObjectSchema } from './DepartmentCreateOrConnectWithoutPermissionsInput.schema';
import { DepartmentUpsertWithoutPermissionsInputObjectSchema } from './DepartmentUpsertWithoutPermissionsInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateToOneWithWhereWithoutPermissionsInputObjectSchema } from './DepartmentUpdateToOneWithWhereWithoutPermissionsInput.schema';
import { DepartmentUpdateWithoutPermissionsInputObjectSchema } from './DepartmentUpdateWithoutPermissionsInput.schema';
import { DepartmentUncheckedUpdateWithoutPermissionsInputObjectSchema } from './DepartmentUncheckedUpdateWithoutPermissionsInput.schema'

export const DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutPermissionsNestedInput, Prisma.DepartmentUpdateOneRequiredWithoutPermissionsNestedInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateToOneWithWhereWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutPermissionsInputObjectSchema)]).optional()
}).strict();
export const DepartmentUpdateOneRequiredWithoutPermissionsNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutPermissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutPermissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutPermissionsInputObjectSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateToOneWithWhereWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUpdateWithoutPermissionsInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutPermissionsInputObjectSchema)]).optional()
}).strict();
