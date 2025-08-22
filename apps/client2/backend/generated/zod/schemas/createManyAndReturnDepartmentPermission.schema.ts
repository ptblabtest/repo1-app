import { z } from 'zod';
import { DepartmentPermissionSelectObjectSchema } from './objects/DepartmentPermissionSelect.schema';
import { DepartmentPermissionCreateManyInputObjectSchema } from './objects/DepartmentPermissionCreateManyInput.schema'

export const DepartmentPermissionCreateManyAndReturnSchema = z.object({ select: DepartmentPermissionSelectObjectSchema.optional(), data: z.union([ DepartmentPermissionCreateManyInputObjectSchema, z.array(DepartmentPermissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()