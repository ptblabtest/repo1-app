import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { StageIncludeObjectSchema } from './objects/StageInclude.schema';
import { StageOrderByWithRelationInputObjectSchema } from './objects/StageOrderByWithRelationInput.schema';
import { StageWhereInputObjectSchema } from './objects/StageWhereInput.schema';
import { StageWhereUniqueInputObjectSchema } from './objects/StageWhereUniqueInput.schema';
import { StageScalarFieldEnumSchema } from './enums/StageScalarFieldEnum.schema';
import { StageTypeArgsObjectSchema } from './objects/StageTypeArgs.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { ReportArgsObjectSchema } from './objects/ReportArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StageFindManySelectSchema: z.ZodType<Prisma.StageSelect, Prisma.StageSelect> = z.object({
    id: z.boolean().optional(),
    stageTypeId: z.boolean().optional(),
    comment: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    type: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    report: z.boolean().optional(),
    reportId: z.boolean().optional()
  }).strict();

export const StageFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    stageTypeId: z.boolean().optional(),
    comment: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    type: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    report: z.boolean().optional(),
    reportId: z.boolean().optional()
  }).strict();

export const StageFindManySchema: z.ZodType<Prisma.StageFindManyArgs, Prisma.StageFindManyArgs> = z.object({ select: StageFindManySelectSchema.optional(), include: z.lazy(() => StageIncludeObjectSchema.optional()), orderBy: z.union([StageOrderByWithRelationInputObjectSchema, StageOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageWhereInputObjectSchema.optional(), cursor: StageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StageScalarFieldEnumSchema, StageScalarFieldEnumSchema.array()]).optional() }).strict();

export const StageFindManyZodSchema = z.object({ select: StageFindManySelectSchema.optional(), include: z.lazy(() => StageIncludeObjectSchema.optional()), orderBy: z.union([StageOrderByWithRelationInputObjectSchema, StageOrderByWithRelationInputObjectSchema.array()]).optional(), where: StageWhereInputObjectSchema.optional(), cursor: StageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StageScalarFieldEnumSchema, StageScalarFieldEnumSchema.array()]).optional() }).strict();