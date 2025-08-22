import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrganizationCountOutputTypeSelectObjectSchema } from './OrganizationCountOutputTypeSelect.schema'

export const OrganizationCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => OrganizationCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => OrganizationCountOutputTypeSelectObjectSchema).optional()
}).strict();
