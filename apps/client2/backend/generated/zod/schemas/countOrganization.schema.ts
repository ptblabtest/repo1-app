import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { OrganizationOrderByWithRelationInputObjectSchema } from './objects/OrganizationOrderByWithRelationInput.schema';
import { OrganizationWhereInputObjectSchema } from './objects/OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';
import { OrganizationCountAggregateInputObjectSchema } from './objects/OrganizationCountAggregateInput.schema'

export const OrganizationCountSchema: z.ZodType<Prisma.OrganizationCountArgs, Prisma.OrganizationCountArgs> = z.object({ orderBy: z.union([OrganizationOrderByWithRelationInputObjectSchema, OrganizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganizationWhereInputObjectSchema.optional(), cursor: OrganizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrganizationCountAggregateInputObjectSchema ]).optional() }).strict();

export const OrganizationCountZodSchema = z.object({ orderBy: z.union([OrganizationOrderByWithRelationInputObjectSchema, OrganizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganizationWhereInputObjectSchema.optional(), cursor: OrganizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrganizationCountAggregateInputObjectSchema ]).optional() }).strict();