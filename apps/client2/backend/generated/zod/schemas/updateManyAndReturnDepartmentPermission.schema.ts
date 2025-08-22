import { z } from 'zod';
import { DepartmentPermissionSelectObjectSchema } from './objects/DepartmentPermissionSelect.schema';
import { DepartmentPermissionUpdateManyMutationInputObjectSchema } from './objects/DepartmentPermissionUpdateManyMutationInput.schema';
import { DepartmentPermissionWhereInputObjectSchema } from './objects/DepartmentPermissionWhereInput.schema'

export const DepartmentPermissionUpdateManyAndReturnSchema = z.object({ select: DepartmentPermissionSelectObjectSchema.optional(), data: DepartmentPermissionUpdateManyMutationInputObjectSchema, where: DepartmentPermissionWhereInputObjectSchema.optional()  }).strict()