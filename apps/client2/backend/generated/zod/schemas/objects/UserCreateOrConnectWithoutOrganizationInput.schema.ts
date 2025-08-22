import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrganizationInputObjectSchema } from './UserCreateWithoutOrganizationInput.schema';
import { UserUncheckedCreateWithoutOrganizationInputObjectSchema } from './UserUncheckedCreateWithoutOrganizationInput.schema'

export const UserCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrganizationInput, Prisma.UserCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOrganizationInputObjectZodSchema = z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOrganizationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
