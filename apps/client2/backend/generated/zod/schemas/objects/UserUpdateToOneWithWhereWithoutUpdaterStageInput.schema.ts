import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdaterStageInputObjectSchema } from './UserUpdateWithoutUpdaterStageInput.schema';
import { UserUncheckedUpdateWithoutUpdaterStageInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterStageInput.schema'

export const UserUpdateToOneWithWhereWithoutUpdaterStageInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdaterStageInput, Prisma.UserUpdateToOneWithWhereWithoutUpdaterStageInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterStageInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUpdaterStageInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterStageInputObjectSchema)])
}).strict();
