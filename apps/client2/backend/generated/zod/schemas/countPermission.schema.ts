import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { PermissionOrderByWithRelationInputObjectSchema } from './objects/PermissionOrderByWithRelationInput.schema';
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema';
import { PermissionCountAggregateInputObjectSchema } from './objects/PermissionCountAggregateInput.schema'

export const PermissionCountSchema: z.ZodType<Prisma.PermissionCountArgs, Prisma.PermissionCountArgs> = z.object({ orderBy: z.union([PermissionOrderByWithRelationInputObjectSchema, PermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PermissionWhereInputObjectSchema.optional(), cursor: PermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PermissionCountAggregateInputObjectSchema ]).optional() }).strict();

export const PermissionCountZodSchema = z.object({ orderBy: z.union([PermissionOrderByWithRelationInputObjectSchema, PermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PermissionWhereInputObjectSchema.optional(), cursor: PermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PermissionCountAggregateInputObjectSchema ]).optional() }).strict();