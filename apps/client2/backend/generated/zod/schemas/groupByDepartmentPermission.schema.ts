import { z } from 'zod';
import { DepartmentPermissionWhereInputObjectSchema } from './objects/DepartmentPermissionWhereInput.schema';
import { DepartmentPermissionOrderByWithAggregationInputObjectSchema } from './objects/DepartmentPermissionOrderByWithAggregationInput.schema';
import { DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema } from './objects/DepartmentPermissionScalarWhereWithAggregatesInput.schema';
import { DepartmentPermissionScalarFieldEnumSchema } from './enums/DepartmentPermissionScalarFieldEnum.schema';
import { DepartmentPermissionCountAggregateInputObjectSchema } from './objects/DepartmentPermissionCountAggregateInput.schema';
import { DepartmentPermissionMinAggregateInputObjectSchema } from './objects/DepartmentPermissionMinAggregateInput.schema';
import { DepartmentPermissionMaxAggregateInputObjectSchema } from './objects/DepartmentPermissionMaxAggregateInput.schema'

export const DepartmentPermissionGroupBySchema = z.object({ where: DepartmentPermissionWhereInputObjectSchema.optional(), orderBy: z.union([DepartmentPermissionOrderByWithAggregationInputObjectSchema, DepartmentPermissionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DepartmentPermissionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DepartmentPermissionScalarFieldEnumSchema), _count: z.union([ z.literal(true), DepartmentPermissionCountAggregateInputObjectSchema ]).optional(), _min: DepartmentPermissionMinAggregateInputObjectSchema.optional(), _max: DepartmentPermissionMaxAggregateInputObjectSchema.optional() })