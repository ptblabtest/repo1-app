import { z } from 'zod';
import { UserPermissionWhereInputObjectSchema } from './objects/UserPermissionWhereInput.schema'

export const UserPermissionDeleteManySchema = z.object({ where: UserPermissionWhereInputObjectSchema.optional()  })