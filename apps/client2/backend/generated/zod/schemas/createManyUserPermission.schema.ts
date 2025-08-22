import { z } from 'zod';
import { UserPermissionCreateManyInputObjectSchema } from './objects/UserPermissionCreateManyInput.schema'

export const UserPermissionCreateManySchema = z.object({ data: z.union([ UserPermissionCreateManyInputObjectSchema, z.array(UserPermissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })