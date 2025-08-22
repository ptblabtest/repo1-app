import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { DepartmentOrderByWithRelationInputObjectSchema } from './objects/DepartmentOrderByWithRelationInput.schema';
import { DepartmentWhereInputObjectSchema } from './objects/DepartmentWhereInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema';
import { DepartmentCountAggregateInputObjectSchema } from './objects/DepartmentCountAggregateInput.schema'

export const DepartmentCountSchema: z.ZodType<Prisma.DepartmentCountArgs, Prisma.DepartmentCountArgs> = z.object({ orderBy: z.union([DepartmentOrderByWithRelationInputObjectSchema, DepartmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentWhereInputObjectSchema.optional(), cursor: DepartmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DepartmentCountAggregateInputObjectSchema ]).optional() }).strict();

export const DepartmentCountZodSchema = z.object({ orderBy: z.union([DepartmentOrderByWithRelationInputObjectSchema, DepartmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentWhereInputObjectSchema.optional(), cursor: DepartmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DepartmentCountAggregateInputObjectSchema ]).optional() }).strict();