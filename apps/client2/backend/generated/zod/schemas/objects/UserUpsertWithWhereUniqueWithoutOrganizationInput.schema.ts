import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOrganizationInputObjectSchema } from './UserUpdateWithoutOrganizationInput.schema';
import { UserUncheckedUpdateWithoutOrganizationInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizationInput.schema';
import { UserCreateWithoutOrganizationInputObjectSchema } from './UserCreateWithoutOrganizationInput.schema';
import { UserUncheckedCreateWithoutOrganizationInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInput.schema'

export const UserUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutOrganizationInput, Prisma.UserUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
