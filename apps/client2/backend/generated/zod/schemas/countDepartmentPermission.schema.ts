import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { DepartmentPermissionOrderByWithRelationInputObjectSchema } from './objects/DepartmentPermissionOrderByWithRelationInput.schema';
import { DepartmentPermissionWhereInputObjectSchema } from './objects/DepartmentPermissionWhereInput.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './objects/DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionCountAggregateInputObjectSchema } from './objects/DepartmentPermissionCountAggregateInput.schema'

export const DepartmentPermissionCountSchema: z.ZodType<Prisma.DepartmentPermissionCountArgs, Prisma.DepartmentPermissionCountArgs> = z.object({ orderBy: z.union([DepartmentPermissionOrderByWithRelationInputObjectSchema, DepartmentPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentPermissionWhereInputObjectSchema.optional(), cursor: DepartmentPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DepartmentPermissionCountAggregateInputObjectSchema ]).optional() }).strict();

export const DepartmentPermissionCountZodSchema = z.object({ orderBy: z.union([DepartmentPermissionOrderByWithRelationInputObjectSchema, DepartmentPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentPermissionWhereInputObjectSchema.optional(), cursor: DepartmentPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DepartmentPermissionCountAggregateInputObjectSchema ]).optional() }).strict();