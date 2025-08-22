import { z } from 'zod';
import { UserPermissionSelectObjectSchema } from './objects/UserPermissionSelect.schema';
import { UserPermissionIncludeObjectSchema } from './objects/UserPermissionInclude.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './objects/UserPermissionWhereUniqueInput.schema'

export const UserPermissionFindUniqueOrThrowSchema = z.object({ select: UserPermissionSelectObjectSchema.optional(), include: UserPermissionIncludeObjectSchema.optional(), where: UserPermissionWhereUniqueInputObjectSchema })