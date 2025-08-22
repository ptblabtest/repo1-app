import { z } from 'zod';
import { OrganizationSelectObjectSchema } from './objects/OrganizationSelect.schema';
import { OrganizationCreateManyInputObjectSchema } from './objects/OrganizationCreateManyInput.schema'

export const OrganizationCreateManyAndReturnSchema = z.object({ select: OrganizationSelectObjectSchema.optional(), data: z.union([ OrganizationCreateManyInputObjectSchema, z.array(OrganizationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()