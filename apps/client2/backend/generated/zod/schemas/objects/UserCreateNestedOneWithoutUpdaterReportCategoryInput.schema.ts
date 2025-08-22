import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterReportCategoryInputObjectSchema } from './UserCreateWithoutUpdaterReportCategoryInput.schema';
import { UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterReportCategoryInput.schema';
import { UserCreateOrConnectWithoutUpdaterReportCategoryInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterReportCategoryInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdaterReportCategoryInput, Prisma.UserCreateNestedOneWithoutUpdaterReportCategoryInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUpdaterReportCategoryInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterReportCategoryInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
