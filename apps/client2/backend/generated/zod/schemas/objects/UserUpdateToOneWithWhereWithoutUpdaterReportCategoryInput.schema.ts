import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUpdateWithoutUpdaterReportCategoryInput.schema';
import { UserUncheckedUpdateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterReportCategoryInput.schema'

export const UserUpdateToOneWithWhereWithoutUpdaterReportCategoryInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdaterReportCategoryInput, Prisma.UserUpdateToOneWithWhereWithoutUpdaterReportCategoryInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportCategoryInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUpdaterReportCategoryInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportCategoryInputObjectSchema)])
}).strict();
