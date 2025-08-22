import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutCreatorReportCategoryInputObjectSchema } from './UserUpdateWithoutCreatorReportCategoryInput.schema';
import { UserUncheckedUpdateWithoutCreatorReportCategoryInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorReportCategoryInput.schema';
import { UserCreateWithoutCreatorReportCategoryInputObjectSchema } from './UserCreateWithoutCreatorReportCategoryInput.schema';
import { UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema } from './UserUncheckedCreateWithoutCreatorReportCategoryInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutCreatorReportCategoryInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCreatorReportCategoryInput, Prisma.UserUpsertWithoutCreatorReportCategoryInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCreatorReportCategoryInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
