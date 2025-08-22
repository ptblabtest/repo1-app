import { z } from 'zod';
import { RoleSelectObjectSchema } from './objects/RoleSelect.schema';
import { RoleUpdateManyMutationInputObjectSchema } from './objects/RoleUpdateManyMutationInput.schema';
import { RoleWhereInputObjectSchema } from './objects/RoleWhereInput.schema'

export const RoleUpdateManyAndReturnSchema = z.object({ select: RoleSelectObjectSchema.optional(), data: RoleUpdateManyMutationInputObjectSchema, where: RoleWhereInputObjectSchema.optional()  }).strict()