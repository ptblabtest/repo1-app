import { z } from 'zod';
import { DepartmentPermissionSelectObjectSchema } from './objects/DepartmentPermissionSelect.schema';
import { DepartmentPermissionIncludeObjectSchema } from './objects/DepartmentPermissionInclude.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './objects/DepartmentPermissionWhereUniqueInput.schema'

export const DepartmentPermissionFindUniqueSchema = z.object({ select: DepartmentPermissionSelectObjectSchema.optional(), include: DepartmentPermissionIncludeObjectSchema.optional(), where: DepartmentPermissionWhereUniqueInputObjectSchema })