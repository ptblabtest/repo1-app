import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { FileWhereInputObjectSchema } from './FileWhereInput.schema'

export const FileListRelationFilterObjectSchema: z.ZodType<Prisma.FileListRelationFilter, Prisma.FileListRelationFilter> = z.object({
  every: z.lazy(() => FileWhereInputObjectSchema).optional(),
  some: z.lazy(() => FileWhereInputObjectSchema).optional(),
  none: z.lazy(() => FileWhereInputObjectSchema).optional()
}).strict();
export const FileListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => FileWhereInputObjectSchema).optional(),
  some: z.lazy(() => FileWhereInputObjectSchema).optional(),
  none: z.lazy(() => FileWhereInputObjectSchema).optional()
}).strict();
