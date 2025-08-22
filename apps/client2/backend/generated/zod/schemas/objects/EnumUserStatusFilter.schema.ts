import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { NestedEnumUserStatusFilterObjectSchema } from './NestedEnumUserStatusFilter.schema'

export const EnumUserStatusFilterObjectSchema: z.ZodType<Prisma.EnumUserStatusFilter, Prisma.EnumUserStatusFilter> = z.object({
  equals: UserStatusSchema.optional(),
  in: UserStatusSchema.array().optional(),
  notIn: UserStatusSchema.array().optional(),
  not: z.union([UserStatusSchema, z.lazy(() => NestedEnumUserStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumUserStatusFilterObjectZodSchema = z.object({
  equals: UserStatusSchema.optional(),
  in: UserStatusSchema.array().optional(),
  notIn: UserStatusSchema.array().optional(),
  not: z.union([UserStatusSchema, z.lazy(() => NestedEnumUserStatusFilterObjectSchema)]).optional()
}).strict();
