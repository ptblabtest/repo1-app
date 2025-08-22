import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCountOutputTypeSelectObjectSchema } from './UserCountOutputTypeSelect.schema'

export const UserCountOutputTypeArgsObjectSchema = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const UserCountOutputTypeArgsObjectZodSchema = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectObjectSchema).optional()
}).strict();
