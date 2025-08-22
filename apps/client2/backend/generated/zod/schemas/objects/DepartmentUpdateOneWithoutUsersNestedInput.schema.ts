import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateWithoutUsersInputObjectSchema } from './DepartmentCreateWithoutUsersInput.schema';
import { DepartmentUncheckedCreateWithoutUsersInputObjectSchema } from './DepartmentUncheckedCreateWithoutUsersInput.schema';
import { DepartmentCreateOrConnectWithoutUsersInputObjectSchema } from './DepartmentCreateOrConnectWithoutUsersInput.schema';
import { DepartmentUpsertWithoutUsersInputObjectSchema } from './DepartmentUpsertWithoutUsersInput.schema';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './DepartmentUpdateToOneWithWhereWithoutUsersInput.schema';
import { DepartmentUpdateWithoutUsersInputObjectSchema } from './DepartmentUpdateWithoutUsersInput.schema';
import { DepartmentUncheckedUpdateWithoutUsersInputObjectSchema } from './DepartmentUncheckedUpdateWithoutUsersInput.schema'

export const DepartmentUpdateOneWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateOneWithoutUsersNestedInput, Prisma.DepartmentUpdateOneWithoutUsersNestedInput> = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutUsersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DepartmentWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DepartmentWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUpdateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const DepartmentUpdateOneWithoutUsersNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => DepartmentCreateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutUsersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DepartmentWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DepartmentWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUpdateWithoutUsersInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
