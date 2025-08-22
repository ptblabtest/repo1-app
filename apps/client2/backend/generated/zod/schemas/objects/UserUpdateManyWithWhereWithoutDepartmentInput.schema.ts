import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutDepartmentInputObjectSchema } from './UserUncheckedUpdateManyWithoutDepartmentInput.schema'

export const UserUpdateManyWithWhereWithoutDepartmentInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutDepartmentInput, Prisma.UserUpdateManyWithWhereWithoutDepartmentInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutDepartmentInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutDepartmentInputObjectZodSchema = z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutDepartmentInputObjectSchema)])
}).strict();
