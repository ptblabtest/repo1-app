import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorReportCategoryInputObjectSchema } from './UserCreateWithoutCreatorReportCategoryInput.schema';
import { UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema } from './UserUncheckedCreateWithoutCreatorReportCategoryInput.schema';
import { UserCreateOrConnectWithoutCreatorReportCategoryInputObjectSchema } from './UserCreateOrConnectWithoutCreatorReportCategoryInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatorReportCategoryInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorReportCategoryInput, Prisma.UserCreateNestedOneWithoutCreatorReportCategoryInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorReportCategoryInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCreatorReportCategoryInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportCategoryInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportCategoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorReportCategoryInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
