import { z } from 'zod';
import { RoleWhereInputObjectSchema } from './objects/RoleWhereInput.schema';
import { RoleOrderByWithAggregationInputObjectSchema } from './objects/RoleOrderByWithAggregationInput.schema';
import { RoleScalarWhereWithAggregatesInputObjectSchema } from './objects/RoleScalarWhereWithAggregatesInput.schema';
import { RoleScalarFieldEnumSchema } from './enums/RoleScalarFieldEnum.schema';
import { RoleCountAggregateInputObjectSchema } from './objects/RoleCountAggregateInput.schema';
import { RoleMinAggregateInputObjectSchema } from './objects/RoleMinAggregateInput.schema';
import { RoleMaxAggregateInputObjectSchema } from './objects/RoleMaxAggregateInput.schema'

export const RoleGroupBySchema = z.object({ where: RoleWhereInputObjectSchema.optional(), orderBy: z.union([RoleOrderByWithAggregationInputObjectSchema, RoleOrderByWithAggregationInputObjectSchema.array()]).optional(), having: RoleScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RoleScalarFieldEnumSchema), _count: z.union([ z.literal(true), RoleCountAggregateInputObjectSchema ]).optional(), _min: RoleMinAggregateInputObjectSchema.optional(), _max: RoleMaxAggregateInputObjectSchema.optional() })