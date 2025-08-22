import { z } from 'zod';
import { DepartmentPermissionUpdateManyMutationInputObjectSchema } from './objects/DepartmentPermissionUpdateManyMutationInput.schema';
import { DepartmentPermissionWhereInputObjectSchema } from './objects/DepartmentPermissionWhereInput.schema'

export const DepartmentPermissionUpdateManySchema = z.object({ data: DepartmentPermissionUpdateManyMutationInputObjectSchema, where: DepartmentPermissionWhereInputObjectSchema.optional()  })