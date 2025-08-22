import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { StageOrderByWithRelationInputObjectSchema } from './objects/StageOrderByWithRelationInput.schema';
import { StageWhereInputObjectSchema } from './objects/StageWhereInput.schema';
import { StageWhereUniqueInputObjectSchema } from './objects/StageWhereUniqueInput.schema';
import { StageCountAggregateInputObjectSchema } from './objects/StageCountAggregateInput.schema'

export const StageCountSchema: z.ZodType<Prisma.StageCountArgs, Prisma.StageCountArgs> = z.object({ orderBy: z.union([StageOrderByWithRelationInputObjectSchema, StageOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageWhereInputObjectSchema.optional(), cursor: StageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StageCountAggregateInputObjectSchema ]).optional() }).strict();

export const StageCountZodSchema = z.object({ orderBy: z.union([StageOrderByWithRelationInputObjectSchema, StageOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageWhereInputObjectSchema.optional(), cursor: StageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StageCountAggregateInputObjectSchema ]).optional() }).strict();