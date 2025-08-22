import { z } from 'zod';
import { DepartmentPermissionSelectObjectSchema } from './objects/DepartmentPermissionSelect.schema';
import { DepartmentPermissionIncludeObjectSchema } from './objects/DepartmentPermissionInclude.schema';
import { DepartmentPermissionUpdateInputObjectSchema } from './objects/DepartmentPermissionUpdateInput.schema';
import { DepartmentPermissionUncheckedUpdateInputObjectSchema } from './objects/DepartmentPermissionUncheckedUpdateInput.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './objects/DepartmentPermissionWhereUniqueInput.schema'

export const DepartmentPermissionUpdateOneSchema = z.object({ select: DepartmentPermissionSelectObjectSchema.optional(), include: DepartmentPermissionIncludeObjectSchema.optional(), data: z.union([DepartmentPermissionUpdateInputObjectSchema, DepartmentPermissionUncheckedUpdateInputObjectSchema]), where: DepartmentPermissionWhereUniqueInputObjectSchema  })