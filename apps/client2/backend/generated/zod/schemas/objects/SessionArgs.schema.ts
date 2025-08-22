import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SessionSelectObjectSchema } from './SessionSelect.schema'

export const SessionArgsObjectSchema = z.object({
  select: z.lazy(() => SessionSelectObjectSchema).optional()
}).strict();
export const SessionArgsObjectZodSchema = z.object({
  select: z.lazy(() => SessionSelectObjectSchema).optional()
}).strict();
