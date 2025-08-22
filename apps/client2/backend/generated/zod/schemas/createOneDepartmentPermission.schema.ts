import { z } from 'zod';
import { DepartmentPermissionSelectObjectSchema } from './objects/DepartmentPermissionSelect.schema';
import { DepartmentPermissionIncludeObjectSchema } from './objects/DepartmentPermissionInclude.schema';
import { DepartmentPermissionCreateInputObjectSchema } from './objects/DepartmentPermissionCreateInput.schema';
import { DepartmentPermissionUncheckedCreateInputObjectSchema } from './objects/DepartmentPermissionUncheckedCreateInput.schema'

export const DepartmentPermissionCreateOneSchema = z.object({ select: DepartmentPermissionSelectObjectSchema.optional(), include: DepartmentPermissionIncludeObjectSchema.optional(), data: z.union([DepartmentPermissionCreateInputObjectSchema, DepartmentPermissionUncheckedCreateInputObjectSchema])  })