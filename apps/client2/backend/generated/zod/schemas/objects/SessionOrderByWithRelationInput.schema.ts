import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const SessionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput, Prisma.SessionOrderByWithRelationInput> = z.object({
  sid: SortOrderSchema.optional(),
  sess: SortOrderSchema.optional(),
  expire: SortOrderSchema.optional()
}).strict();
export const SessionOrderByWithRelationInputObjectZodSchema = z.object({
  sid: SortOrderSchema.optional(),
  sess: SortOrderSchema.optional(),
  expire: SortOrderSchema.optional()
}).strict();
