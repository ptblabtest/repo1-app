import { z } from 'zod';
import { UserPermissionSelectObjectSchema } from './objects/UserPermissionSelect.schema';
import { UserPermissionCreateManyInputObjectSchema } from './objects/UserPermissionCreateManyInput.schema'

export const UserPermissionCreateManyAndReturnSchema = z.object({ select: UserPermissionSelectObjectSchema.optional(), data: z.union([ UserPermissionCreateManyInputObjectSchema, z.array(UserPermissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()