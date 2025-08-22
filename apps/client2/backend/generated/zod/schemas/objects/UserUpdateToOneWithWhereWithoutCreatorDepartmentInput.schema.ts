import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCreatorDepartmentInputObjectSchema } from './UserUpdateWithoutCreatorDepartmentInput.schema';
import { UserUncheckedUpdateWithoutCreatorDepartmentInputObjectSchema } from './UserUncheckedUpdateWithoutCreatorDepartmentInput.schema'

export const UserUpdateToOneWithWhereWithoutCreatorDepartmentInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatorDepartmentInput, Prisma.UserUpdateToOneWithWhereWithoutCreatorDepartmentInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCreatorDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCreatorDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCreatorDepartmentInputObjectSchema)])
}).strict();
