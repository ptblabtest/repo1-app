import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUpdaterDepartmentInputObjectSchema } from './UserUpdateWithoutUpdaterDepartmentInput.schema';
import { UserUncheckedUpdateWithoutUpdaterDepartmentInputObjectSchema } from './UserUncheckedUpdateWithoutUpdaterDepartmentInput.schema'

export const UserUpdateToOneWithWhereWithoutUpdaterDepartmentInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdaterDepartmentInput, Prisma.UserUpdateToOneWithWhereWithoutUpdaterDepartmentInput> = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUpdaterDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUpdaterDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUpdaterDepartmentInputObjectSchema)])
}).strict();
