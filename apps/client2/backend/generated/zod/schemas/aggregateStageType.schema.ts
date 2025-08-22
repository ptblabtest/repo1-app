import { z } from 'zod';
import { StageTypeOrderByWithRelationInputObjectSchema } from './objects/StageTypeOrderByWithRelationInput.schema';
import { StageTypeWhereInputObjectSchema } from './objects/StageTypeWhereInput.schema';
import { StageTypeWhereUniqueInputObjectSchema } from './objects/StageTypeWhereUniqueInput.schema';
import { StageTypeCountAggregateInputObjectSchema } from './objects/StageTypeCountAggregateInput.schema';
import { StageTypeMinAggregateInputObjectSchema } from './objects/StageTypeMinAggregateInput.schema';
import { StageTypeMaxAggregateInputObjectSchema } from './objects/StageTypeMaxAggregateInput.schema';
import { StageTypeAvgAggregateInputObjectSchema } from './objects/StageTypeAvgAggregateInput.schema';
import { StageTypeSumAggregateInputObjectSchema } from './objects/StageTypeSumAggregateInput.schema'

export const StageTypeAggregateSchema = z.object({ orderBy: z.union([StageTypeOrderByWithRelationInputObjectSchema, StageTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageTypeWhereInputObjectSchema.optional(), cursor: StageTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StageTypeCountAggregateInputObjectSchema ]).optional(), _min: StageTypeMinAggregateInputObjectSchema.optional(), _max: StageTypeMaxAggregateInputObjectSchema.optional(), _avg: StageTypeAvgAggregateInputObjectSchema.optional(), _sum: StageTypeSumAggregateInputObjectSchema.optional() })