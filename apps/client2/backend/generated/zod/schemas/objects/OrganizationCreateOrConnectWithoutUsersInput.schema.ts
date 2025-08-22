import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutUsersInputObjectSchema } from './OrganizationCreateWithoutUsersInput.schema';
import { OrganizationUncheckedCreateWithoutUsersInputObjectSchema } from './OrganizationUncheckedCreateWithoutUsersInput.schema'

export const OrganizationCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutUsersInput, Prisma.OrganizationCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutUsersInputObjectZodSchema = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutUsersInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
