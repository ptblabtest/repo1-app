import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { UserPermissionOrderByWithRelationInputObjectSchema } from './objects/UserPermissionOrderByWithRelationInput.schema';
import { UserPermissionWhereInputObjectSchema } from './objects/UserPermissionWhereInput.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './objects/UserPermissionWhereUniqueInput.schema';
import { UserPermissionCountAggregateInputObjectSchema } from './objects/UserPermissionCountAggregateInput.schema'

export const UserPermissionCountSchema: z.ZodType<Prisma.UserPermissionCountArgs, Prisma.UserPermissionCountArgs> = z.object({ orderBy: z.union([UserPermissionOrderByWithRelationInputObjectSchema, UserPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserPermissionWhereInputObjectSchema.optional(), cursor: UserPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserPermissionCountAggregateInputObjectSchema ]).optional() }).strict();

export const UserPermissionCountZodSchema = z.object({ orderBy: z.union([UserPermissionOrderByWithRelationInputObjectSchema, UserPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserPermissionWhereInputObjectSchema.optional(), cursor: UserPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserPermissionCountAggregateInputObjectSchema ]).optional() }).strict();