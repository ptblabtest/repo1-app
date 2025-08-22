import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

export const OrganizationNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.OrganizationNullableScalarRelationFilter, Prisma.OrganizationNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => OrganizationWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => OrganizationWhereInputObjectSchema).nullish()
}).strict();
export const OrganizationNullableScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => OrganizationWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => OrganizationWhereInputObjectSchema).nullish()
}).strict();
