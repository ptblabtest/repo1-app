import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutUpdaterReportInputObjectSchema } from './UserUpdateWithoutUpdaterReportInput.schema';
import { UserUncheckedUpdateWithoutUpdaterReportInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterReportInput.schema';
import { UserCreateWithoutUpdaterReportInputObjectSchema } from './UserCreateWithoutUpdaterReportInput.schema';
import { UserUncheckedCreateWithoutUpdaterReportInputObjectSchema } from './UserUncheckedCreateWithoutUpdaterReportInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutUpdaterReportInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUpdaterReportInput, Prisma.UserUpsertWithoutUpdaterReportInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUpdaterReportInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUpdaterReportInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
