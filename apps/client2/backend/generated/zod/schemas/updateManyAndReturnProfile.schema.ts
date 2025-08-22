import { z } from 'zod';
import { ProfileSelectObjectSchema } from './objects/ProfileSelect.schema';
import { ProfileUpdateManyMutationInputObjectSchema } from './objects/ProfileUpdateManyMutationInput.schema';
import { ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema'

export const ProfileUpdateManyAndReturnSchema = z.object({ select: ProfileSelectObjectSchema.optional(), data: ProfileUpdateManyMutationInputObjectSchema, where: ProfileWhereInputObjectSchema.optional()  }).strict()