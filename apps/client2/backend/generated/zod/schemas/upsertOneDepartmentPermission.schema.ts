import { z } from 'zod';
import { DepartmentPermissionSelectObjectSchema } from './objects/DepartmentPermissionSelect.schema';
import { DepartmentPermissionIncludeObjectSchema } from './objects/DepartmentPermissionInclude.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './objects/DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionCreateInputObjectSchema } from './objects/DepartmentPermissionCreateInput.schema';
import { DepartmentPermissionUncheckedCreateInputObjectSchema } from './objects/DepartmentPermissionUncheckedCreateInput.schema';
import { DepartmentPermissionUpdateInputObjectSchema } from './objects/DepartmentPermissionUpdateInput.schema';
import { DepartmentPermissionUncheckedUpdateInputObjectSchema } from './objects/DepartmentPermissionUncheckedUpdateInput.schema'

export const DepartmentPermissionUpsertSchema = z.object({ select: DepartmentPermissionSelectObjectSchema.optional(), include: DepartmentPermissionIncludeObjectSchema.optional(), where: DepartmentPermissionWhereUniqueInputObjectSchema, create: z.union([ DepartmentPermissionCreateInputObjectSchema, DepartmentPermissionUncheckedCreateInputObjectSchema ]), update: z.union([ DepartmentPermissionUpdateInputObjectSchema, DepartmentPermissionUncheckedUpdateInputObjectSchema ])  })