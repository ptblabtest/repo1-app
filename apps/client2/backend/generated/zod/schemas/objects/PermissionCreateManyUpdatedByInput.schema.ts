import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const PermissionCreateManyUpdatedByInputObjectSchema: z.ZodType<Prisma.PermissionCreateManyUpdatedByInput, Prisma.PermissionCreateManyUpdatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
export const PermissionCreateManyUpdatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdById: z.string().nullish()
}).strict();
