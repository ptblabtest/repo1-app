import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateWithoutUpdaterReportInputObjectSchema } from './UserCreateWithoutUpdaterReportInput.schema';
import { UserUncheckedCreateWithoutUpdaterReportInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterReportInput.schema';
import { UserCreateOrConnectWithoutUpdaterReportInputObjectSchema } from './UserCreateOrConnectWithoutUpdaterReportInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutUpdaterReportInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdaterReportInput, Prisma.UserCreateNestedOneWithoutUpdaterReportInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterReportInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUpdaterReportInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdaterReportInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
