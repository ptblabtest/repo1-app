import { z } from 'zod';
import { UserPermissionUpdateManyMutationInputObjectSchema } from './objects/UserPermissionUpdateManyMutationInput.schema';
import { UserPermissionWhereInputObjectSchema } from './objects/UserPermissionWhereInput.schema'

export const UserPermissionUpdateManySchema = z.object({ data: UserPermissionUpdateManyMutationInputObjectSchema, where: UserPermissionWhereInputObjectSchema.optional()  })