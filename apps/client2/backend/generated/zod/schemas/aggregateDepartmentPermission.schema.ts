import { z } from 'zod';
import { DepartmentPermissionOrderByWithRelationInputObjectSchema } from './objects/DepartmentPermissionOrderByWithRelationInput.schema';
import { DepartmentPermissionWhereInputObjectSchema } from './objects/DepartmentPermissionWhereInput.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './objects/DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionCountAggregateInputObjectSchema } from './objects/DepartmentPermissionCountAggregateInput.schema';
import { DepartmentPermissionMinAggregateInputObjectSchema } from './objects/DepartmentPermissionMinAggregateInput.schema';
import { DepartmentPermissionMaxAggregateInputObjectSchema } from './objects/DepartmentPermissionMaxAggregateInput.schema'

export const DepartmentPermissionAggregateSchema = z.object({ orderBy: z.union([DepartmentPermissionOrderByWithRelationInputObjectSchema, DepartmentPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentPermissionWhereInputObjectSchema.optional(), cursor: DepartmentPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DepartmentPermissionCountAggregateInputObjectSchema ]).optional(), _min: DepartmentPermissionMinAggregateInputObjectSchema.optional(), _max: DepartmentPermissionMaxAggregateInputObjectSchema.optional() })