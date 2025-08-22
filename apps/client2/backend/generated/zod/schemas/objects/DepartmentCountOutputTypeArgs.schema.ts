import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCountOutputTypeSelectObjectSchema } from './DepartmentCountOutputTypeSelect.schema'

export const DepartmentCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => DepartmentCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DepartmentCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => DepartmentCountOutputTypeSelectObjectSchema).optional()
}).strict();
