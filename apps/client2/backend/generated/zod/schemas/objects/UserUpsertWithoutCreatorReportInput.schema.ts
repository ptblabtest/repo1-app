import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserUpdateWithoutCreatorReportInputObjectSchema } from './UserUpdateWithoutCreatorReportInput.schema';
import { UserUncheckedUpdateWithoutCreatorReportInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorReportInput.schema';
import { UserCreateWithoutCreatorReportInputObjectSchema } from './UserCreateWithoutCreatorReportInput.schema';
import { UserUncheckedCreateWithoutCreatorReportInputObjectSchema } from './UserUncheckedCreateWithoutCreatorReportInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

export const UserUpsertWithoutCreatorReportInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutCreatorReportInput, Prisma.UserUpsertWithoutCreatorReportInput> = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCreatorReportInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCreatorReportInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
