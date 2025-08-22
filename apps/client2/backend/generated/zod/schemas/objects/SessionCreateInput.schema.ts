import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from './helpers/json-helpers';

export const SessionCreateInputObjectSchema: z.ZodType<Prisma.SessionCreateInput, Prisma.SessionCreateInput> = z.object({
  sid: z.string(),
  sess: z.union([JsonNullValueInputSchema, jsonSchema]),
  expire: z.date()
}).strict();
export const SessionCreateInputObjectZodSchema = z.object({
  sid: z.string(),
  sess: z.union([JsonNullValueInputSchema, jsonSchema]),
  expire: z.date()
}).strict();
