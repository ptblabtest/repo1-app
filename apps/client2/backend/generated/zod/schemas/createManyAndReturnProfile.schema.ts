import { z } from 'zod';
import { ProfileSelectObjectSchema } from './objects/ProfileSelect.schema';
import { ProfileCreateManyInputObjectSchema } from './objects/ProfileCreateManyInput.schema'

export const ProfileCreateManyAndReturnSchema = z.object({ select: ProfileSelectObjectSchema.optional(), data: z.union([ ProfileCreateManyInputObjectSchema, z.array(ProfileCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()