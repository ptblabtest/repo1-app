import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { StageTypeOrderByWithRelationInputObjectSchema } from './objects/StageTypeOrderByWithRelationInput.schema';
import { StageTypeWhereInputObjectSchema } from './objects/StageTypeWhereInput.schema';
import { StageTypeWhereUniqueInputObjectSchema } from './objects/StageTypeWhereUniqueInput.schema';
import { StageTypeCountAggregateInputObjectSchema } from './objects/StageTypeCountAggregateInput.schema'

export const StageTypeCountSchema: z.ZodType<Prisma.StageTypeCountArgs, Prisma.StageTypeCountArgs> = z.object({ orderBy: z.union([StageTypeOrderByWithRelationInputObjectSchema, StageTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageTypeWhereInputObjectSchema.optional(), cursor: StageTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StageTypeCountAggregateInputObjectSchema ]).optional() }).strict();

export const StageTypeCountZodSchema = z.object({ orderBy: z.union([StageTypeOrderByWithRelationInputObjectSchema, StageTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageTypeWhereInputObjectSchema.optional(), cursor: StageTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StageTypeCountAggregateInputObjectSchema ]).optional() }).strict();