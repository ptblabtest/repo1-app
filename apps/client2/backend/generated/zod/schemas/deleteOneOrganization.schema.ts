import { z } from 'zod';
import { OrganizationSelectObjectSchema } from './objects/OrganizationSelect.schema';
import { OrganizationIncludeObjectSchema } from './objects/OrganizationInclude.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema'

export const OrganizationDeleteOneSchema = z.object({ select: OrganizationSelectObjectSchema.optional(), include: OrganizationIncludeObjectSchema.optional(), where: OrganizationWhereUniqueInputObjectSchema  })