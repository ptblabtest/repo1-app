import { z } from 'zod';
import { DepartmentSelectObjectSchema } from './objects/DepartmentSelect.schema';
import { DepartmentUpdateManyMutationInputObjectSchema } from './objects/DepartmentUpdateManyMutationInput.schema';
import { DepartmentWhereInputObjectSchema } from './objects/DepartmentWhereInput.schema'

export const DepartmentUpdateManyAndReturnSchema = z.object({ select: DepartmentSelectObjectSchema.optional(), data: DepartmentUpdateManyMutationInputObjectSchema, where: DepartmentWhereInputObjectSchema.optional()  }).strict()