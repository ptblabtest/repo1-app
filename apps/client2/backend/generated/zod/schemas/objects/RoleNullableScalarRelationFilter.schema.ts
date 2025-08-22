import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema'

export const RoleNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.RoleNullableScalarRelationFilter, Prisma.RoleNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => RoleWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => RoleWhereInputObjectSchema).nullish()
}).strict();
export const RoleNullableScalarRelationFilterObjectZodSchema = z.object({
  is: z.lazy(() => RoleWhereInputObjectSchema).nullish(),
  isNot: z.lazy(() => RoleWhereInputObjectSchema).nullish()
}).strict();
