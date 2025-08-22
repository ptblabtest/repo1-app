import { z } from 'zod';
import { UserPermissionSelectObjectSchema } from './objects/UserPermissionSelect.schema';
import { UserPermissionIncludeObjectSchema } from './objects/UserPermissionInclude.schema';
import { UserPermissionUpdateInputObjectSchema } from './objects/UserPermissionUpdateInput.schema';
import { UserPermissionUncheckedUpdateInputObjectSchema } from './objects/UserPermissionUncheckedUpdateInput.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './objects/UserPermissionWhereUniqueInput.schema'

export const UserPermissionUpdateOneSchema = z.object({ select: UserPermissionSelectObjectSchema.optional(), include: UserPermissionIncludeObjectSchema.optional(), data: z.union([UserPermissionUpdateInputObjectSchema, UserPermissionUncheckedUpdateInputObjectSchema]), where: UserPermissionWhereUniqueInputObjectSchema  })