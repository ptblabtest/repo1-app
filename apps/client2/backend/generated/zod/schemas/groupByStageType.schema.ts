import { z } from 'zod';
import { StageTypeWhereInputObjectSchema } from './objects/StageTypeWhereInput.schema';
import { StageTypeOrderByWithAggregationInputObjectSchema } from './objects/StageTypeOrderByWithAggregationInput.schema';
import { StageTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/StageTypeScalarWhereWithAggregatesInput.schema';
import { StageTypeScalarFieldEnumSchema } from './enums/StageTypeScalarFieldEnum.schema';
import { StageTypeCountAggregateInputObjectSchema } from './objects/StageTypeCountAggregateInput.schema';
import { StageTypeMinAggregateInputObjectSchema } from './objects/StageTypeMinAggregateInput.schema';
import { StageTypeMaxAggregateInputObjectSchema } from './objects/StageTypeMaxAggregateInput.schema'

export const StageTypeGroupBySchema = z.object({ where: StageTypeWhereInputObjectSchema.optional(), orderBy: z.union([StageTypeOrderByWithAggregationInputObjectSchema, StageTypeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StageTypeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StageTypeScalarFieldEnumSchema), _count: z.union([ z.literal(true), StageTypeCountAggregateInputObjectSchema ]).optional(), _min: StageTypeMinAggregateInputObjectSchema.optional(), _max: StageTypeMaxAggregateInputObjectSchema.optional() })