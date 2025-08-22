import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { FileIncludeObjectSchema } from './objects/FileInclude.schema';
import { FileOrderByWithRelationInputObjectSchema } from './objects/FileOrderByWithRelationInput.schema';
import { FileWhereInputObjectSchema } from './objects/FileWhereInput.schema';
import { FileWhereUniqueInputObjectSchema } from './objects/FileWhereUniqueInput.schema';
import { FileScalarFieldEnumSchema } from './enums/FileScalarFieldEnum.schema';
import { ReportArgsObjectSchema } from './objects/ReportArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FileFindFirstSelectSchema: z.ZodType<Prisma.FileSelect, Prisma.FileSelect> = z.object({
    id: z.boolean().optional(),
    filename: z.boolean().optional(),
    path: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    report: z.boolean().optional(),
    reportId: z.boolean().optional()
  }).strict();

export const FileFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    filename: z.boolean().optional(),
    path: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    report: z.boolean().optional(),
    reportId: z.boolean().optional()
  }).strict();

export const FileFindFirstSchema: z.ZodType<Prisma.FileFindFirstArgs, Prisma.FileFindFirstArgs> = z.object({ select: FileFindFirstSelectSchema.optional(), include: z.lazy(() => FileIncludeObjectSchema.optional()), orderBy: z.union([FileOrderByWithRelationInputObjectSchema, FileOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileWhereInputObjectSchema.optional(), cursor: FileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileScalarFieldEnumSchema, FileScalarFieldEnumSchema.array()]).optional() }).strict();

export const FileFindFirstZodSchema = z.object({ select: FileFindFirstSelectSchema.optional(), include: z.lazy(() => FileIncludeObjectSchema.optional()), orderBy: z.union([FileOrderByWithRelationInputObjectSchema, FileOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileWhereInputObjectSchema.optional(), cursor: FileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileScalarFieldEnumSchema, FileScalarFieldEnumSchema.array()]).optional() }).strict();