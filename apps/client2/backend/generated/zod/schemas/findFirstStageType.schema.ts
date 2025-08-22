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

export const StageTypeFindFirstSelectSchema: z.ZodType<Prisma.StageTypeSelect, Prisma.StageTypeSelect> = z.object({
    id: z.boolean().optional(),
    model: z.boolean().optional(),
    order: z.boolean().optional(),
    value: z.boolean().optional(),
    label: z.boolean().optional(),
    stages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const StageTypeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    model: z.boolean().optional(),
    order: z.boolean().optional(),
    value: z.boolean().optional(),
    label: z.boolean().optional(),
    stages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const StageTypeFindFirstSchema: z.ZodType<Prisma.StageTypeFindFirstArgs, Prisma.StageTypeFindFirstArgs> = z.object({ select: StageTypeFindFirstSelectSchema.optional(), include: z.lazy(() => StageTypeIncludeObjectSchema.optional()), orderBy: z.union([StageTypeOrderByWithRelationInputObjectSchema, StageTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageTypeWhereInputObjectSchema.optional(), cursor: StageTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StageTypeScalarFieldEnumSchema, StageTypeScalarFieldEnumSchema.array()]).optional() }).strict();

export const StageTypeFindFirstZodSchema = z.object({ select: StageTypeFindFirstSelectSchema.optional(), include: z.lazy(() => StageTypeIncludeObjectSchema.optional()), orderBy: z.union([StageTypeOrderByWithRelationInputObjectSchema, StageTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageTypeWhereInputObjectSchema.optional(), cursor: StageTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StageTypeScalarFieldEnumSchema, StageTypeScalarFieldEnumSchema.array()]).optional() }).strict();