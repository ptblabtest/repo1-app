import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { ReportCategoryIncludeObjectSchema } from './objects/ReportCategoryInclude.schema';
import { ReportCategoryOrderByWithRelationInputObjectSchema } from './objects/ReportCategoryOrderByWithRelationInput.schema';
import { ReportCategoryWhereInputObjectSchema } from './objects/ReportCategoryWhereInput.schema';
import { ReportCategoryWhereUniqueInputObjectSchema } from './objects/ReportCategoryWhereUniqueInput.schema';
import { ReportCategoryScalarFieldEnumSchema } from './enums/ReportCategoryScalarFieldEnum.schema';
import { ReportCategoryArgsObjectSchema } from './objects/ReportCategoryArgs.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { ReportArgsObjectSchema } from './objects/ReportArgs.schema';
import { ReportCategoryCountOutputTypeArgsObjectSchema } from './objects/ReportCategoryCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportCategoryFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReportCategorySelect, Prisma.ReportCategorySelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    parent: z.boolean().optional(),
    parentId: z.boolean().optional(),
    children: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ReportCategoryFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    parent: z.boolean().optional(),
    parentId: z.boolean().optional(),
    children: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    reports: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ReportCategoryFindFirstOrThrowSchema: z.ZodType<Prisma.ReportCategoryFindFirstOrThrowArgs, Prisma.ReportCategoryFindFirstOrThrowArgs> = z.object({ select: ReportCategoryFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportCategoryIncludeObjectSchema.optional()), orderBy: z.union([ReportCategoryOrderByWithRelationInputObjectSchema, ReportCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportCategoryWhereInputObjectSchema.optional(), cursor: ReportCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportCategoryScalarFieldEnumSchema, ReportCategoryScalarFieldEnumSchema.array()]).optional() }).strict();

export const ReportCategoryFindFirstOrThrowZodSchema = z.object({ select: ReportCategoryFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReportCategoryIncludeObjectSchema.optional()), orderBy: z.union([ReportCategoryOrderByWithRelationInputObjectSchema, ReportCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReportCategoryWhereInputObjectSchema.optional(), cursor: ReportCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReportCategoryScalarFieldEnumSchema, ReportCategoryScalarFieldEnumSchema.array()]).optional() }).strict();