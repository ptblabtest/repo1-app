import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatorReportInputObjectSchema } from './UserCreateWithoutCreatorReportInput.schema';
import { UserUncheckedCreateWithoutCreatorReportInputObjectSchema } from './UserUncheckedCreateWithoutCreatorReportInput.schema'

export const UserCreateOrConnectWithoutCreatorReportInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatorReportInput, Prisma.UserCreateOrConnectWithoutCreatorReportInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCreatorReportInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportInputObjectSchema)])
}).strict();
