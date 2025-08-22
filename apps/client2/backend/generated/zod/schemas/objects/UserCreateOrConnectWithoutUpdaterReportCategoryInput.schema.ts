import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdaterReportCategoryInputObjectSchema } from './UserCreateWithoutUpdaterReportCategoryInput.schema';
import { UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterReportCategoryInput.schema'

export const UserCreateOrConnectWithoutUpdaterReportCategoryInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdaterReportCategoryInput, Prisma.UserCreateOrConnectWithoutUpdaterReportCategoryInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUpdaterReportCategoryInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema)])
}).strict();
