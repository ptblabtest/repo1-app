import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOrganizationInputObjectSchema } from './UserUpdateWithoutOrganizationInput.schema';
import { UserUncheckedUpdateWithoutOrganizationInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationInput.schema'

export const UserUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutOrganizationInput, Prisma.UserUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
