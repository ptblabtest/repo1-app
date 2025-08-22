import { z } from 'zod';
import { PermissionSelectObjectSchema } from './objects/PermissionSelect.schema';
import { PermissionCreateManyInputObjectSchema } from './objects/PermissionCreateManyInput.schema'

export const PermissionCreateManyAndReturnSchema = z.object({ select: PermissionSelectObjectSchema.optional(), data: z.union([ PermissionCreateManyInputObjectSchema, z.array(PermissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()