import { z } from 'zod';
import { FileWhereInputObjectSchema } from './objects/FileWhereInput.schema';
import { FileOrderByWithAggregationInputObjectSchema } from './objects/FileOrderByWithAggregationInput.schema';
import { FileScalarWhereWithAggregatesInputObjectSchema } from './objects/FileScalarWhereWithAggregatesInput.schema';
import { FileScalarFieldEnumSchema } from './enums/FileScalarFieldEnum.schema';
import { FileCountAggregateInputObjectSchema } from './objects/FileCountAggregateInput.schema';
import { FileMinAggregateInputObjectSchema } from './objects/FileMinAggregateInput.schema';
import { FileMaxAggregateInputObjectSchema } from './objects/FileMaxAggregateInput.schema'

export const FileGroupBySchema = z.object({ where: FileWhereInputObjectSchema.optional(), orderBy: z.union([FileOrderByWithAggregationInputObjectSchema, FileOrderByWithAggregationInputObjectSchema.array()]).optional(), having: FileScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FileScalarFieldEnumSchema), _count: z.union([ z.literal(true), FileCountAggregateInputObjectSchema ]).optional(), _min: FileMinAggregateInputObjectSchema.optional(), _max: FileMaxAggregateInputObjectSchema.optional() })