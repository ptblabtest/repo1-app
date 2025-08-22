import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdaterReportInputObjectSchema } from './UserUpdateWithoutUpdaterReportInput.schema';
import { UserUncheckedUpdateWithoutUpdaterReportInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterReportInput.schema'

export const UserUpdateToOneWithWhereWithoutUpdaterReportInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdaterReportInput, Prisma.UserUpdateToOneWithWhereWithoutUpdaterReportInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUpdaterReportInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterReportInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterReportInputObjectSchema)])
}).strict();
