import { z } from 'zod';
import { UserPermissionSelectObjectSchema } from './objects/UserPermissionSelect.schema';
import { UserPermissionIncludeObjectSchema } from './objects/UserPermissionInclude.schema';
import { UserPermissionCreateInputObjectSchema } from './objects/UserPermissionCreateInput.schema';
import { UserPermissionUncheckedCreateInputObjectSchema } from './objects/UserPermissionUncheckedCreateInput.schema'

export const UserPermissionCreateOneSchema = z.object({ select: UserPermissionSelectObjectSchema.optional(), include: UserPermissionIncludeObjectSchema.optional(), data: z.union([UserPermissionCreateInputObjectSchema, UserPermissionUncheckedCreateInputObjectSchema])  })