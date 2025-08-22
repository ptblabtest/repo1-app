import { z } from 'zod';
import { RoleSelectObjectSchema } from './objects/RoleSelect.schema';
import { RoleCreateManyInputObjectSchema } from './objects/RoleCreateManyInput.schema'

export const RoleCreateManyAndReturnSchema = z.object({ select: RoleSelectObjectSchema.optional(), data: z.union([ RoleCreateManyInputObjectSchema, z.array(RoleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()