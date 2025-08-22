import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUpdaterReportInputObjectSchema } from './UserCreateWithoutUpdaterReportInput.schema';
import { UserUncheckedCreateWithoutUpdaterReportInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterReportInput.schema'

export const UserCreateOrConnectWithoutUpdaterReportInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdaterReportInput, Prisma.UserCreateOrConnectWithoutUpdaterReportInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUpdaterReportInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportInputObjectSchema)])
}).strict();
