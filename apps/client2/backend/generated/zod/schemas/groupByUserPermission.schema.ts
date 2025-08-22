import { z } from 'zod';
import { UserPermissionWhereInputObjectSchema } from './objects/UserPermissionWhereInput.schema';
import { UserPermissionOrderByWithAggregationInputObjectSchema } from './objects/UserPermissionOrderByWithAggregationInput.schema';
import { UserPermissionScalarWhereWithAggregatesInputObjectSchema } from './objects/UserPermissionScalarWhereWithAggregatesInput.schema';
import { UserPermissionScalarFieldEnumSchema } from './enums/UserPermissionScalarFieldEnum.schema';
import { UserPermissionCountAggregateInputObjectSchema } from './objects/UserPermissionCountAggregateInput.schema';
import { UserPermissionMinAggregateInputObjectSchema } from './objects/UserPermissionMinAggregateInput.schema';
import { UserPermissionMaxAggregateInputObjectSchema } from './objects/UserPermissionMaxAggregateInput.schema'

export const UserPermissionGroupBySchema = z.object({ where: UserPermissionWhereInputObjectSchema.optional(), orderBy: z.union([UserPermissionOrderByWithAggregationInputObjectSchema, UserPermissionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserPermissionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserPermissionScalarFieldEnumSchema), _count: z.union([ z.literal(true), UserPermissionCountAggregateInputObjectSchema ]).optional(), _min: UserPermissionMinAggregateInputObjectSchema.optional(), _max: UserPermissionMaxAggregateInputObjectSchema.optional() })