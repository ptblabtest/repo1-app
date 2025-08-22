import { z } from 'zod';
import { OrganizationWhereInputObjectSchema } from './objects/OrganizationWhereInput.schema';
import { OrganizationOrderByWithAggregationInputObjectSchema } from './objects/OrganizationOrderByWithAggregationInput.schema';
import { OrganizationScalarWhereWithAggregatesInputObjectSchema } from './objects/OrganizationScalarWhereWithAggregatesInput.schema';
import { OrganizationScalarFieldEnumSchema } from './enums/OrganizationScalarFieldEnum.schema';
import { OrganizationCountAggregateInputObjectSchema } from './objects/OrganizationCountAggregateInput.schema';
import { OrganizationMinAggregateInputObjectSchema } from './objects/OrganizationMinAggregateInput.schema';
import { OrganizationMaxAggregateInputObjectSchema } from './objects/OrganizationMaxAggregateInput.schema'

export const OrganizationGroupBySchema = z.object({ where: OrganizationWhereInputObjectSchema.optional(), orderBy: z.union([OrganizationOrderByWithAggregationInputObjectSchema, OrganizationOrderByWithAggregationInputObjectSchema.array()]).optional(), having: OrganizationScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(OrganizationScalarFieldEnumSchema), _count: z.union([ z.literal(true), OrganizationCountAggregateInputObjectSchema ]).optional(), _min: OrganizationMinAggregateInputObjectSchema.optional(), _max: OrganizationMaxAggregateInputObjectSchema.optional() })