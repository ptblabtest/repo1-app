import { z } from 'zod';
import { UserPermissionOrderByWithRelationInputObjectSchema } from './objects/UserPermissionOrderByWithRelationInput.schema';
import { UserPermissionWhereInputObjectSchema } from './objects/UserPermissionWhereInput.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './objects/UserPermissionWhereUniqueInput.schema';
import { UserPermissionCountAggregateInputObjectSchema } from './objects/UserPermissionCountAggregateInput.schema';
import { UserPermissionMinAggregateInputObjectSchema } from './objects/UserPermissionMinAggregateInput.schema';
import { UserPermissionMaxAggregateInputObjectSchema } from './objects/UserPermissionMaxAggregateInput.schema'

export const UserPermissionAggregateSchema = z.object({ orderBy: z.union([UserPermissionOrderByWithRelationInputObjectSchema, UserPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserPermissionWhereInputObjectSchema.optional(), cursor: UserPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UserPermissionCountAggregateInputObjectSchema ]).optional(), _min: UserPermissionMinAggregateInputObjectSchema.optional(), _max: UserPermissionMaxAggregateInputObjectSchema.optional() })