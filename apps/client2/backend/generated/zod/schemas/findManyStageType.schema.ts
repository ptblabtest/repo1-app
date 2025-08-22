import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { StageTypeIncludeObjectSchema } from './objects/StageTypeInclude.schema';
import { StageTypeOrderByWithRelationInputObjectSchema } from './objects/StageTypeOrderByWithRelationInput.schema';
import { StageTypeWhereInputObjectSchema } from './objects/StageTypeWhereInput.schema';
import { StageTypeWhereUniqueInputObjectSchema } from './objects/StageTypeWhereUniqueInput.schema';
import { StageTypeScalarFieldEnumSchema } from './enums/StageTypeScalarFieldEnum.schema';
import { StageArgsObjectSchema } from './objects/StageArgs.schema';
import { StageTypeCountOutputTypeArgsObjectSchema } from './objects/StageTypeCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StageTypeFindManySelectSchema: z.ZodType<Prisma.StageTypeSelect, Prisma.StageTypeSelect> = z.object({
    id: z.boolean().optional(),
    model: z.boolean().optional(),
    order: z.boolean().optional(),
    value: z.boolean().optional(),
    label: z.boolean().optional(),
    stages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const StageTypeFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    model: z.boolean().optional(),
    order: z.boolean().optional(),
    value: z.boolean().optional(),
    label: z.boolean().optional(),
    stages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const StageTypeFindManySchema: z.ZodType<Prisma.StageTypeFindManyArgs, Prisma.StageTypeFindManyArgs> = z.object({ select: StageTypeFindManySelectSchema.optional(), include: z.lazy(() => StageTypeIncludeObjectSchema.optional()), orderBy: z.union([StageTypeOrderByWithRelationInputObjectSchema, StageTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageTypeWhereInputObjectSchema.optional(), cursor: StageTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StageTypeScalarFieldEnumSchema, StageTypeScalarFieldEnumSchema.array()]).optional() }).strict();

export const StageTypeFindManyZodSchema = z.object({ select: StageTypeFindManySelectSchema.optional(), include: z.lazy(() => StageTypeIncludeObjectSchema.optional()), orderBy: z.union([StageTypeOrderByWithRelationInputObjectSchema, StageTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageTypeWhereInputObjectSchema.optional(), cursor: StageTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StageTypeScalarFieldEnumSchema, StageTypeScalarFieldEnumSchema.array()]).optional() }).strict();