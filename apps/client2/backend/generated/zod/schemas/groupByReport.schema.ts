import { z } from 'zod';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportOrderByWithAggregationInputObjectSchema } from './objects/ReportOrderByWithAggregationInput.schema';
import { ReportScalarWhereWithAggregatesInputObjectSchema } from './objects/ReportScalarWhereWithAggregatesInput.schema';
import { ReportScalarFieldEnumSchema } from './enums/ReportScalarFieldEnum.schema';
import { ReportCountAggregateInputObjectSchema } from './objects/ReportCountAggregateInput.schema';
import { ReportMinAggregateInputObjectSchema } from './objects/ReportMinAggregateInput.schema';
import { ReportMaxAggregateInputObjectSchema } from './objects/ReportMaxAggregateInput.schema'

export const ReportGroupBySchema = z.object({ where: ReportWhereInputObjectSchema.optional(), orderBy: z.union([ReportOrderByWithAggregationInputObjectSchema, ReportOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional(), _min: ReportMinAggregateInputObjectSchema.optional(), _max: ReportMaxAggregateInputObjectSchema.optional() })