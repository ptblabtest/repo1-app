import { z } from 'zod';
import { DepartmentSelectObjectSchema } from './objects/DepartmentSelect.schema';
import { DepartmentIncludeObjectSchema } from './objects/DepartmentInclude.schema';
import { DepartmentUpdateInputObjectSchema } from './objects/DepartmentUpdateInput.schema';
import { DepartmentUncheckedUpdateInputObjectSchema } from './objects/DepartmentUncheckedUpdateInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema'

export const DepartmentUpdateOneSchema = z.object({ select: DepartmentSelectObjectSchema.optional(), include: DepartmentIncludeObjectSchema.optional(), data: z.union([DepartmentUpdateInputObjectSchema, DepartmentUncheckedUpdateInputObjectSchema]), where: DepartmentWhereUniqueInputObjectSchema  })