import { z } from 'zod';
import { UserPermissionSelectObjectSchema } from './objects/UserPermissionSelect.schema';
import { UserPermissionUpdateManyMutationInputObjectSchema } from './objects/UserPermissionUpdateManyMutationInput.schema';
import { UserPermissionWhereInputObjectSchema } from './objects/UserPermissionWhereInput.schema'

export const UserPermissionUpdateManyAndReturnSchema = z.object({ select: UserPermissionSelectObjectSchema.optional(), data: UserPermissionUpdateManyMutationInputObjectSchema, where: UserPermissionWhereInputObjectSchema.optional()  }).strict()