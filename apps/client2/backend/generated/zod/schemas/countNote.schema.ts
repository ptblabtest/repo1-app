import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { NoteOrderByWithRelationInputObjectSchema } from './objects/NoteOrderByWithRelationInput.schema';
import { NoteWhereInputObjectSchema } from './objects/NoteWhereInput.schema';
import { NoteWhereUniqueInputObjectSchema } from './objects/NoteWhereUniqueInput.schema';
import { NoteCountAggregateInputObjectSchema } from './objects/NoteCountAggregateInput.schema'

export const NoteCountSchema: z.ZodType<Prisma.NoteCountArgs, Prisma.NoteCountArgs> = z.object({ orderBy: z.union([NoteOrderByWithRelationInputObjectSchema, NoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoteWhereInputObjectSchema.optional(), cursor: NoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NoteCountAggregateInputObjectSchema ]).optional() }).strict();

export const NoteCountZodSchema = z.object({ orderBy: z.union([NoteOrderByWithRelationInputObjectSchema, NoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: NoteWhereInputObjectSchema.optional(), cursor: NoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NoteCountAggregateInputObjectSchema ]).optional() }).strict();