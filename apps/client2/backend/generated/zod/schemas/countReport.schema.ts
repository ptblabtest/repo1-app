import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ReportOrderByWithRelationInputObjectSchema } from './objects/ReportOrderByWithRelationInput.schema';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportCountAggregateInputObjectSchema } from './objects/ReportCountAggregateInput.schema'

export const ReportCountSchema: z.ZodType<Prisma.ReportCountArgs, Prisma.ReportCountArgs> = z.object({ orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional() }).strict();

export const ReportCountZodSchema = z.object({ orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReportCountAggregateInputObjectSchema ]).optional() }).strict();