import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorReportCategoryInputObjectSchema } from './UserCreateWithoutCreatorReportCategoryInput.schema';
import { UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema } from './UserUncheckedCreateWithoutCreatorReportCategoryInput.schema'

export const UserCreateOrConnectWithoutCreatorReportCategoryInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorReportCategoryInput, Prisma.UserCreateOrConnectWithoutCreatorReportCategoryInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCreatorReportCategoryInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema)])
}).strict();
