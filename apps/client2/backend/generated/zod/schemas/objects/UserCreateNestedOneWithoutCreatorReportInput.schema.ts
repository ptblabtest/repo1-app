import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutCreatorReportInputObjectSchema } from './UserCreateWithoutCreatorReportInput.schema';
import { UserUncheckedCreateWithoutCreatorReportInputObjectSchema } from './UserUncheckedCreateWithoutCreatorReportInput.schema';
import { UserCreateOrConnectWithoutCreatorReportInputObjectSchema } from './UserCreateOrConnectWithoutCreatorReportInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatorReportInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatorReportInput, Prisma.UserCreateNestedOneWithoutCreatorReportInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorReportInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCreatorReportInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatorReportInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
