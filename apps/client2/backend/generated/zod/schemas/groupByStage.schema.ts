import { z } from 'zod';
import { StageWhereInputObjectSchema } from './objects/StageWhereInput.schema';
import { StageOrderByWithAggregationInputObjectSchema } from './objects/StageOrderByWithAggregationInput.schema';
import { StageScalarWhereWithAggregatesInputObjectSchema } from './objects/StageScalarWhereWithAggregatesInput.schema';
import { StageScalarFieldEnumSchema } from './enums/StageScalarFieldEnum.schema';
import { StageCountAggregateInputObjectSchema } from './objects/StageCountAggregateInput.schema';
import { StageMinAggregateInputObjectSchema } from './objects/StageMinAggregateInput.schema';
import { StageMaxAggregateInputObjectSchema } from './objects/StageMaxAggregateInput.schema'

export const StageGroupBySchema = z.object({ where: StageWhereInputObjectSchema.optional(), orderBy: z.union([StageOrderByWithAggregationInputObjectSchema, StageOrderByWithAggregationInputObjectSchema.array()]).optional(), having: StageScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StageScalarFieldEnumSchema), _count: z.union([ z.literal(true), StageCountAggregateInputObjectSchema ]).optional(), _min: StageMinAggregateInputObjectSchema.optional(), _max: StageMaxAggregateInputObjectSchema.optional() })