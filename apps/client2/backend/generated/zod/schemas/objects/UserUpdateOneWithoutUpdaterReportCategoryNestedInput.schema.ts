import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterReportCategoryInputObjectSchema } from './UserCreateWithoutUpdaterReportCategoryInput.schema';
import { UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterReportCategoryInput.schema';
import { UserCreateOrConnectWithoutUpdaterReportCategoryInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterReportCategoryInput.schema';
import { UserUpsertWithoutUpdaterReportCategoryInputObjectSchema } from './UserUpsertWithoutUpdaterReportCategoryInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUpdaterReportCategoryInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUpdaterReportCategoryInput.schema';
import { UserUpdateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUpdateWithoutUpdaterReportCategoryInput.schema';
import { UserUncheckedUpdateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterReportCategoryInput.schema'

export const UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdaterReportCategoryNestedInput, Prisma.UserUpdateOneWithoutUpdaterReportCategoryNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportCategoryInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUpdateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportCategoryInputObjectSchema)]).optional()
}).strict();
