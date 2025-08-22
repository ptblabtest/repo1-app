import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatorReportInputObjectSchema } from './UserUpdateWithoutCreatorReportInput.schema';
import { UserUncheckedUpdateWithoutCreatorReportInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorReportInput.schema'

export const UserUpdateToOneWithWhereWithoutCreatorReportInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatorReportInput, Prisma.UserUpdateToOneWithWhereWithoutCreatorReportInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCreatorReportInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorReportInputObjectSchema)])
}).strict();
