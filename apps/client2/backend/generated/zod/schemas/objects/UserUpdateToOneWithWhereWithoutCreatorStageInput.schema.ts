import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatorStageInputObjectSchema } from './UserUpdateWithoutCreatorStageInput.schema';
import { UserUncheckedUpdateWithoutCreatorStageInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorStageInput.schema'

export const UserUpdateToOneWithWhereWithoutCreatorStageInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatorStageInput, Prisma.UserUpdateToOneWithWhereWithoutCreatorStageInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorStageInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCreatorStageInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorStageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorStageInputObjectSchema)])
}).strict();
