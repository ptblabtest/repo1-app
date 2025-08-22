import { z } from 'zod';
import { DepartmentPermissionWhereInputObjectSchema } from './objects/DepartmentPermissionWhereInput.schema'

export const DepartmentPermissionDeleteManySchema = z.object({ where: DepartmentPermissionWhereInputObjectSchema.optional()  })