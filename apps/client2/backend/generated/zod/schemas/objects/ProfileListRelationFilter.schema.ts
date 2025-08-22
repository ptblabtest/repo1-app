import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

export const ProfileListRelationFilterObjectSchema: z.ZodType<Prisma.ProfileListRelationFilter, Prisma.ProfileListRelationFilter> = z.object({
  every: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
