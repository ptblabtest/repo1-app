import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

export const OrganizationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OrganizationScalarWhereWithAggregatesInput, Prisma.OrganizationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const OrganizationScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrganizationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
