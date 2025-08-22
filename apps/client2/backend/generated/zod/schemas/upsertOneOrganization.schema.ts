import { z } from 'zod';
import { OrganizationSelectObjectSchema } from './objects/OrganizationSelect.schema';
import { OrganizationIncludeObjectSchema } from './objects/OrganizationInclude.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';
import { OrganizationCreateInputObjectSchema } from './objects/OrganizationCreateInput.schema';
import { OrganizationUncheckedCreateInputObjectSchema } from './objects/OrganizationUncheckedCreateInput.schema';
import { OrganizationUpdateInputObjectSchema } from './objects/OrganizationUpdateInput.schema';
import { OrganizationUncheckedUpdateInputObjectSchema } from './objects/OrganizationUncheckedUpdateInput.schema'

export const OrganizationUpsertSchema = z.object({ select: OrganizationSelectObjectSchema.optional(), include: OrganizationIncludeObjectSchema.optional(), where: OrganizationWhereUniqueInputObjectSchema, create: z.union([ OrganizationCreateInputObjectSchema, OrganizationUncheckedCreateInputObjectSchema ]), update: z.union([ OrganizationUpdateInputObjectSchema, OrganizationUncheckedUpdateInputObjectSchema ])  })