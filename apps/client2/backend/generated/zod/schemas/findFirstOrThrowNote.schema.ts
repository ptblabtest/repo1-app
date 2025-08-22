import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { NoteIncludeObjectSchema } from './objects/NoteInclude.schema';
import { NoteOrderByWithRelationInputObjectSchema } from './objects/NoteOrderByWithRelationInput.schema';
import { NoteWhereInputObjectSchema } from './objects/NoteWhereInput.schema';
import { NoteWhereUniqueInputObjectSchema } from './objects/NoteWhereUniqueInput.schema';
import { NoteScalarFieldEnumSchema } from './enums/NoteScalarFieldEnum.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { ReportArgsObjectSchema } from './objects/ReportArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NoteFindFirstOrThrowSelectSchema: z.ZodType<Prisma.NoteSelect, Prisma.NoteSelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    report: z.boolean().optional(),
    reportId: z.boolean().optional()
  }).strict();

export const NoteFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    report: z.boolean().optional(),
    reportId: z.boolean().optional()
  }).strict();

export const NoteFindFirstOrThrowSchema: z.ZodType<Prisma.NoteFindFirstOrThrowArgs, Prisma.NoteFindFirstOrThrowArgs> = z.object({ select: NoteFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => NoteIncludeObjectSchema.optional()), orderBy: z.union([NoteOrderByWithRelationInputObjectSchema, NoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoteWhereInputObjectSchema.optional(), cursor: NoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NoteScalarFieldEnumSchema, NoteScalarFieldEnumSchema.array()]).optional() }).strict();

export const NoteFindFirstOrThrowZodSchema = z.object({ select: NoteFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => NoteIncludeObjectSchema.optional()), orderBy: z.union([NoteOrderByWithRelationInputObjectSchema, NoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoteWhereInputObjectSchema.optional(), cursor: NoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NoteScalarFieldEnumSchema, NoteScalarFieldEnumSchema.array()]).optional() }).strict();