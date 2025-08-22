import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { RoleCreateWithoutUsersInputObjectSchema } from './RoleCreateWithoutUsersInput.schema';
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from './RoleUncheckedCreateWithoutUsersInput.schema';
import { RoleCreateOrConnectWithoutUsersInputObjectSchema } from './RoleCreateOrConnectWithoutUsersInput.schema';
import { RoleUpsertWithoutUsersInputObjectSchema } from './RoleUpsertWithoutUsersInput.schema';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './RoleUpdateToOneWithWhereWithoutUsersInput.schema';
import { RoleUpdateWithoutUsersInputObjectSchema } from './RoleUpdateWithoutUsersInput.schema';
import { RoleUncheckedUpdateWithoutUsersInputObjectSchema } from './RoleUncheckedUpdateWithoutUsersInput.schema'

export const RoleUpdateOneWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.RoleUpdateOneWithoutUsersNestedInput, Prisma.RoleUpdateOneWithoutUsersNestedInput> = z.object({
  create: z.union([z.lazy(() => RoleCreateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutUsersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => RoleWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => RoleWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoleUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const RoleUpdateOneWithoutUsersNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => RoleCreateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutUsersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => RoleWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => RoleWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoleUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema), z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
