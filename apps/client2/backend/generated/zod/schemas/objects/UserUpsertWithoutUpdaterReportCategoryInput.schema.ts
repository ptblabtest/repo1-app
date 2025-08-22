import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUpdateWithoutUpdaterReportCategoryInput.schema';
import { UserUncheckedUpdateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterReportCategoryInput.schema';
import { UserCreateWithoutUpdaterReportCategoryInputObjectSchema } from './UserCreateWithoutUpdaterReportCategoryInput.schema';
import { UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterReportCategoryInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutUpdaterReportCategoryInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUpdaterReportCategoryInput, Prisma.UserUpsertWithoutUpdaterReportCategoryInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUpdaterReportCategoryInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
