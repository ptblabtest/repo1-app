import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportOrderByWithRelationInputObjectSchema } from './objects/ReportOrderByWithRelationInput.schema';
import { ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';
import { ReportScalarFieldEnumSchema } from './enums/ReportScalarFieldEnum.schema';
import { ReportCategoryArgsObjectSchema } from './objects/ReportCategoryArgs.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { OrganizationArgsObjectSchema } from './objects/OrganizationArgs.schema';
import { NoteArgsObjectSchema } from './objects/NoteArgs.schema';
import { StageArgsObjectSchema } from './objects/StageArgs.schema';
import { FileArgsObjectSchema } from './objects/FileArgs.schema';
import { ReportCountOutputTypeArgsObjectSchema } from './objects/ReportCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportFindFirstSelectSchema: z.ZodType<Prisma.ReportSelect, Prisma.ReportSelect> = z.object({
    id: z.boolean().optional(),
    category: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    periodYear: z.boolean().optional(),
    periodMonth: z.boolean().optional(),
    periodDate: z.boolean().optional(),
    version: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    organization: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    notes: z.boolean().optional(),
    stages: z.boolean().optional(),
    files: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ReportFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    category: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    periodYear: z.boolean().optional(),
    periodMonth: z.boolean().optional(),
    periodDate: z.boolean().optional(),
    version: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    organization: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    notes: z.boolean().optional(),
    stages: z.boolean().optional(),
    files: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ReportFindFirstSchema: z.ZodType<Prisma.ReportFindFirstArgs, Prisma.ReportFindFirstArgs> = z.object({ select: ReportFindFirstSelectSchema.optional(), include: z.lazy(() => ReportIncludeObjectSchema.optional()), orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportScalarFieldEnumSchema, ReportScalarFieldEnumSchema.array()]).optional() }).strict();

export const ReportFindFirstZodSchema = z.object({ select: ReportFindFirstSelectSchema.optional(), include: z.lazy(() => ReportIncludeObjectSchema.optional()), orderBy: z.union([ReportOrderByWithRelationInputObjectSchema, ReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportWhereInputObjectSchema.optional(), cursor: ReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportScalarFieldEnumSchema, ReportScalarFieldEnumSchema.array()]).optional() }).strict();