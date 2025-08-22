import { z } from 'zod';
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema';
import { PermissionOrderByWithAggregationInputObjectSchema } from './objects/PermissionOrderByWithAggregationInput.schema';
import { PermissionScalarWhereWithAggregatesInputObjectSchema } from './objects/PermissionScalarWhereWithAggregatesInput.schema';
import { PermissionScalarFieldEnumSchema } from './enums/PermissionScalarFieldEnum.schema';
import { PermissionCountAggregateInputObjectSchema } from './objects/PermissionCountAggregateInput.schema';
import { PermissionMinAggregateInputObjectSchema } from './objects/PermissionMinAggregateInput.schema';
import { PermissionMaxAggregateInputObjectSchema } from './objects/PermissionMaxAggregateInput.schema'

export const PermissionGroupBySchema = z.object({ where: PermissionWhereInputObjectSchema.optional(), orderBy: z.union([PermissionOrderByWithAggregationInputObjectSchema, PermissionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PermissionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PermissionScalarFieldEnumSchema), _count: z.union([ z.literal(true), PermissionCountAggregateInputObjectSchema ]).optional(), _min: PermissionMinAggregateInputObjectSchema.optional(), _max: PermissionMaxAggregateInputObjectSchema.optional() })