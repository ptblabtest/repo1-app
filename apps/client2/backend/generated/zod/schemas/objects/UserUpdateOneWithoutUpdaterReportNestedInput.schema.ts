import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterReportInputObjectSchema } from './UserCreateWithoutUpdaterReportInput.schema';
import { UserUncheckedCreateWithoutUpdaterReportInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterReportInput.schema';
import { UserCreateOrConnectWithoutUpdaterReportInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterReportInput.schema';
import { UserUpsertWithoutUpdaterReportInputObjectSchema } from './UserUpsertWithoutUpdaterReportInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdaterReportInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdaterReportInput.schema';
import { UserUpdateWithoutUpdaterReportInputObjectSchema } from './UserUpdateWithoutUpdaterReportInput.schema';
import { UserUncheckedUpdateWithoutUpdaterReportInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterReportInput.schema'

export const UserUpdateOneWithoutUpdaterReportNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdaterReportNestedInput, Prisma.UserUpdateOneWithoutUpdaterReportNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterReportInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUpdaterReportNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterReportInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportInputObjectSchema)]).optional()
}).strict();
