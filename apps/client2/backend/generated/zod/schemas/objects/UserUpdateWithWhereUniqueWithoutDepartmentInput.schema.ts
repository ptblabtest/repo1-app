import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDepartmentInputObjectSchema } from './UserUpdateWithoutDepartmentInput.schema';
import { UserUncheckedUpdateWithoutDepartmentInputObjectSchema } from './UserUncheckedUpdateWithoutDepartmentInput.schema'

export const UserUpdateWithWhereUniqueWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput, Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDepartmentInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutDepartmentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDepartmentInputObjectSchema)])
}).strict();
