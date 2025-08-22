import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorReportCategoryInputObjectSchema } from './UserCreateWithoutCreatorReportCategoryInput.schema';
import { UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema } from './UserUncheckedCreateWithoutCreatorReportCategoryInput.schema';
import { UserCreateOrConnectWithoutCreatorReportCategoryInputObjectSchema } from './UserCreateOrConnectWithoutCreatorReportCategoryInput.schema';
import { UserUpsertWithoutCreatorReportCategoryInputObjectSchema } from './UserUpsertWithoutCreatorReportCategoryInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCreatorReportCategoryInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCreatorReportCategoryInput.schema';
import { UserUpdateWithoutCreatorReportCategoryInputObjectSchema } from './UserUpdateWithoutCreatorReportCategoryInput.schema';
import { UserUncheckedUpdateWithoutCreatorReportCategoryInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorReportCategoryInput.schema'

export const UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatorReportCategoryNestedInput, Prisma.UserUpdateOneWithoutCreatorReportCategoryNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorReportCategoryInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorReportCategoryInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportCategoryInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorReportCategoryInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatorReportCategoryInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUpdateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportCategoryInputObjectSchema)]).optional()
}).strict();
