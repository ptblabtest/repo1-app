import { z } from 'zod';
import { OrganizationSelectObjectSchema } from './objects/OrganizationSelect.schema';
import { OrganizationUpdateManyMutationInputObjectSchema } from './objects/OrganizationUpdateManyMutationInput.schema';
import { OrganizationWhereInputObjectSchema } from './objects/OrganizationWhereInput.schema'

export const OrganizationUpdateManyAndReturnSchema = z.object({ select: OrganizationSelectObjectSchema.optional(), data: OrganizationUpdateManyMutationInputObjectSchema, where: OrganizationWhereInputObjectSchema.optional()  }).strict()