import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './UserUncheckedUpdateManyWithoutOrganizationInput.schema'

export const UserUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutOrganizationInput, Prisma.UserUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
