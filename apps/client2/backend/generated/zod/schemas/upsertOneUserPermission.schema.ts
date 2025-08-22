import { z } from 'zod';
import { UserPermissionSelectObjectSchema } from './objects/UserPermissionSelect.schema';
import { UserPermissionIncludeObjectSchema } from './objects/UserPermissionInclude.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './objects/UserPermissionWhereUniqueInput.schema';
import { UserPermissionCreateInputObjectSchema } from './objects/UserPermissionCreateInput.schema';
import { UserPermissionUncheckedCreateInputObjectSchema } from './objects/UserPermissionUncheckedCreateInput.schema';
import { UserPermissionUpdateInputObjectSchema } from './objects/UserPermissionUpdateInput.schema';
import { UserPermissionUncheckedUpdateInputObjectSchema } from './objects/UserPermissionUncheckedUpdateInput.schema'

export const UserPermissionUpsertSchema = z.object({ select: UserPermissionSelectObjectSchema.optional(), include: UserPermissionIncludeObjectSchema.optional(), where: UserPermissionWhereUniqueInputObjectSchema, create: z.union([ UserPermissionCreateInputObjectSchema, UserPermissionUncheckedCreateInputObjectSchema ]), update: z.union([ UserPermissionUpdateInputObjectSchema, UserPermissionUncheckedUpdateInputObjectSchema ])  })