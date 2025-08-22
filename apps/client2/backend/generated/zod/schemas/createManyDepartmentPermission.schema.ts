import { z } from 'zod';
import { DepartmentPermissionCreateManyInputObjectSchema } from './objects/DepartmentPermissionCreateManyInput.schema'

export const DepartmentPermissionCreateManySchema = z.object({ data: z.union([ DepartmentPermissionCreateManyInputObjectSchema, z.array(DepartmentPermissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })