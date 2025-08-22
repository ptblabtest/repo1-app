import { z } from 'zod';
import { DepartmentSelectObjectSchema } from './objects/DepartmentSelect.schema';
import { DepartmentIncludeObjectSchema } from './objects/DepartmentInclude.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema'

export const DepartmentFindUniqueSchema = z.object({ select: DepartmentSelectObjectSchema.optional(), include: DepartmentIncludeObjectSchema.optional(), where: DepartmentWhereUniqueInputObjectSchema })