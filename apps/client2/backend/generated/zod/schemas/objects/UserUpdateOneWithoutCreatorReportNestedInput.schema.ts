import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorReportInputObjectSchema } from './UserCreateWithoutCreatorReportInput.schema';
import { UserUncheckedCreateWithoutCreatorReportInputObjectSchema } from './UserUncheckedCreateWithoutCreatorReportInput.schema';
import { UserCreateOrConnectWithoutCreatorReportInputObjectSchema } from './UserCreateOrConnectWithoutCreatorReportInput.schema';
import { UserUpsertWithoutCreatorReportInputObjectSchema } from './UserUpsertWithoutCreatorReportInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatorReportInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatorReportInput.schema';
import { UserUpdateWithoutCreatorReportInputObjectSchema } from './UserUpdateWithoutCreatorReportInput.schema';
import { UserUncheckedUpdateWithoutCreatorReportInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorReportInput.schema'

export const UserUpdateOneWithoutCreatorReportNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatorReportNestedInput, Prisma.UserUpdateOneWithoutCreatorReportNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorReportInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCreatorReportNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorReportInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportInputObjectSchema)]).optional()
}).strict();
