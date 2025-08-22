import { z } from 'zod';
import { DepartmentSelectObjectSchema } from './objects/DepartmentSelect.schema';
import { DepartmentCreateManyInputObjectSchema } from './objects/DepartmentCreateManyInput.schema'

export const DepartmentCreateManyAndReturnSchema = z.object({ select: DepartmentSelectObjectSchema.optional(), data: z.union([ DepartmentCreateManyInputObjectSchema, z.array(DepartmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()