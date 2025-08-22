import { z } from 'zod';
import { ReportCategoryWhereInputObjectSchema } from './objects/ReportCategoryWhereInput.schema';
import { ReportCategoryOrderByWithAggregationInputObjectSchema } from './objects/ReportCategoryOrderByWithAggregationInput.schema';
import { ReportCategoryScalarWhereWithAggregatesInputObjectSchema } from './objects/ReportCategoryScalarWhereWithAggregatesInput.schema';
import { ReportCategoryScalarFieldEnumSchema } from './enums/ReportCategoryScalarFieldEnum.schema';
import { ReportCategoryCountAggregateInputObjectSchema } from './objects/ReportCategoryCountAggregateInput.schema';
import { ReportCategoryMinAggregateInputObjectSchema } from './objects/ReportCategoryMinAggregateInput.schema';
import { ReportCategoryMaxAggregateInputObjectSchema } from './objects/ReportCategoryMaxAggregateInput.schema'

export const ReportCategoryGroupBySchema = z.object({ where: ReportCategoryWhereInputObjectSchema.optional(), orderBy: z.union([ReportCategoryOrderByWithAggregationInputObjectSchema, ReportCategoryOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReportCategoryScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReportCategoryScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReportCategoryCountAggregateInputObjectSchema ]).optional(), _min: ReportCategoryMinAggregateInputObjectSchema.optional(), _max: ReportCategoryMaxAggregateInputObjectSchema.optional() })