import { z } from 'zod';
import { PermissionSelectObjectSchema } from './objects/PermissionSelect.schema';
import { PermissionUpdateManyMutationInputObjectSchema } from './objects/PermissionUpdateManyMutationInput.schema';
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema'

export const PermissionUpdateManyAndReturnSchema = z.object({ select: PermissionSelectObjectSchema.optional(), data: PermissionUpdateManyMutationInputObjectSchema, where: PermissionWhereInputObjectSchema.optional()  }).strict()