import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionCreateWithoutUsersInputObjectSchema } from './PermissionCreateWithoutUsersInput.schema';
import { PermissionUncheckedCreateWithoutUsersInputObjectSchema } from './PermissionUncheckedCreateWithoutUsersInput.schema';
import { PermissionCreateOrConnectWithoutUsersInputObjectSchema } from './PermissionCreateOrConnectWithoutUsersInput.schema';
import { PermissionUpsertWithoutUsersInputObjectSchema } from './PermissionUpsertWithoutUsersInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './PermissionUpdateToOneWithWhereWithoutUsersInput.schema';
import { PermissionUpdateWithoutUsersInputObjectSchema } from './PermissionUpdateWithoutUsersInput.schema';
import { PermissionUncheckedUpdateWithoutUsersInputObjectSchema } from './PermissionUncheckedUpdateWithoutUsersInput.schema'

export const PermissionUpdateOneRequiredWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.PermissionUpdateOneRequiredWithoutUsersNestedInput, Prisma.PermissionUpdateOneRequiredWithoutUsersNestedInput> = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => PermissionUpsertWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PermissionUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => PermissionUpdateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const PermissionUpdateOneRequiredWithoutUsersNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => PermissionCreateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => PermissionUpsertWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PermissionUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => PermissionUpdateWithoutUsersInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
