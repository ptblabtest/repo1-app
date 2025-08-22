import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ReportCategoryOrderByWithRelationInputObjectSchema } from './objects/ReportCategoryOrderByWithRelationInput.schema';
import { ReportCategoryWhereInputObjectSchema } from './objects/ReportCategoryWhereInput.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './objects/ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryCountAggregateInputObjectSchema } from './objects/ReportCategoryCountAggregateInput.schema'

export const ReportCategoryCountSchema: z.ZodType<Prisma.ReportCategoryCountArgs, Prisma.ReportCategoryCountArgs> = z.object({ orderBy: z.union([ReportCategoryOrderByWithRelationInputObjectSchema, ReportCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportCategoryWhereInputObjectSchema.optional(), cursor: ReportCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportCategoryCountAggregateInputObjectSchema ]).optional() }).strict();

export const ReportCategoryCountZodSchema = z.object({ orderBy: z.union([ReportCategoryOrderByWithRelationInputObjectSchema, ReportCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportCategoryWhereInputObjectSchema.optional(), cursor: ReportCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportCategoryCountAggregateInputObjectSchema ]).optional() }).strict();