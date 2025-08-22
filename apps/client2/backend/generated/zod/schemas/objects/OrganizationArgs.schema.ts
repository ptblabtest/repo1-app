import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrganizationSelectObjectSchema } from './OrganizationSelect.schema';
import { OrganizationIncludeObjectSchema } from './OrganizationInclude.schema'

export const OrganizationArgsObjectSchema = z.object({
  select: z.lazy(() => OrganizationSelectObjectSchema).optional(),
  include: z.lazy(() => OrganizationIncludeObjectSchema).optional()
}).strict();
export const OrganizationArgsObjectZodSchema = z.object({
  select: z.lazy(() => OrganizationSelectObjectSchema).optional(),
  include: z.lazy(() => OrganizationIncludeObjectSchema).optional()
}).strict();
