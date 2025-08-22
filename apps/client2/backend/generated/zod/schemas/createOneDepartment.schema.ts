import { z } from 'zod';
import { DepartmentSelectObjectSchema } from './objects/DepartmentSelect.schema';
import { DepartmentIncludeObjectSchema } from './objects/DepartmentInclude.schema';
import { DepartmentCreateInputObjectSchema } from './objects/DepartmentCreateInput.schema';
import { DepartmentUncheckedCreateInputObjectSchema } from './objects/DepartmentUncheckedCreateInput.schema'

export const DepartmentCreateOneSchema = z.object({ select: DepartmentSelectObjectSchema.optional(), include: DepartmentIncludeObjectSchema.optional(), data: z.union([DepartmentCreateInputObjectSchema, DepartmentUncheckedCreateInputObjectSchema])  })