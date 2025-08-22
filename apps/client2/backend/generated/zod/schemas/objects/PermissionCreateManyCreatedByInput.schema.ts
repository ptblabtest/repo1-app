import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const PermissionCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionCreateManyCreatedByInput, Prisma.PermissionCreateManyCreatedByInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
export const PermissionCreateManyCreatedByInputObjectZodSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  resource: z.string(),
  action: z.string(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  updatedById: z.string().nullish()
}).strict();
