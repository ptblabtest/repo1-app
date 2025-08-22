import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema';
import { PermissionUpdateWithoutUsersInputObjectSchema } from './PermissionUpdateWithoutUsersInput.schema';
import { PermissionUncheckedUpdateWithoutUsersInputObjectSchema } from './PermissionUncheckedUpdateWithoutUsersInput.schema'

export const PermissionUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.PermissionUpdateToOneWithWhereWithoutUsersInput, Prisma.PermissionUpdateToOneWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PermissionUpdateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const PermissionUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PermissionUpdateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
