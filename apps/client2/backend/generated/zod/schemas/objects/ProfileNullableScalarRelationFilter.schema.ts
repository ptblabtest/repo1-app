import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

export const ProfileNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ProfileWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => ProfileWhereInputObjectSchema).nullish()
}).strict();
export const ProfileNullableScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => ProfileWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => ProfileWhereInputObjectSchema).nullish()
}).strict();
