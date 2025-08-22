import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatorReportCategoryInputObjectSchema } from './UserUpdateWithoutCreatorReportCategoryInput.schema';
import { UserUncheckedUpdateWithoutCreatorReportCategoryInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorReportCategoryInput.schema'

export const UserUpdateToOneWithWhereWithoutCreatorReportCategoryInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatorReportCategoryInput, Prisma.UserUpdateToOneWithWhereWithoutCreatorReportCategoryInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportCategoryInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCreatorReportCategoryInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportCategoryInputObjectSchema)])
}).strict();
