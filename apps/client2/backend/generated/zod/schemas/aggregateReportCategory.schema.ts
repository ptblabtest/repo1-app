import { z } from 'zod';
import { ReportCategoryOrderByWithRelationInputObjectSchema } from './objects/ReportCategoryOrderByWithRelationInput.schema';
import { ReportCategoryWhereInputObjectSchema } from './objects/ReportCategoryWhereInput.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './objects/ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryCountAggregateInputObjectSchema } from './objects/ReportCategoryCountAggregateInput.schema';
import { ReportCategoryMinAggregateInputObjectSchema } from './objects/ReportCategoryMinAggregateInput.schema';
import { ReportCategoryMaxAggregateInputObjectSchema } from './objects/ReportCategoryMaxAggregateInput.schema'

export const ReportCategoryAggregateSchema = z.object({ orderBy: z.union([ReportCategoryOrderByWithRelationInputObjectSchema, ReportCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportCategoryWhereInputObjectSchema.optional(), cursor: ReportCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReportCategoryCountAggregateInputObjectSchema ]).optional(), _min: ReportCategoryMinAggregateInputObjectSchema.optional(), _max: ReportCategoryMaxAggregateInputObjectSchema.optional() })