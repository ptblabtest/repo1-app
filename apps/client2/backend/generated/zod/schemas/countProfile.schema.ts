import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ProfileOrderByWithRelationInputObjectSchema } from './objects/ProfileOrderByWithRelationInput.schema';
import { ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';
import { ProfileCountAggregateInputObjectSchema } from './objects/ProfileCountAggregateInput.schema'

export const ProfileCountSchema: z.ZodType<Prisma.ProfileCountArgs, Prisma.ProfileCountArgs> = z.object({ orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProfileCountAggregateInputObjectSchema ]).optional() }).strict();

export const ProfileCountZodSchema = z.object({ orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProfileCountAggregateInputObjectSchema ]).optional() }).strict();