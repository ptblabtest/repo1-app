import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from './helpers/json-helpers';

export const SessionCreateManyInputObjectSchema: z.ZodType<Prisma.SessionCreateManyInput, Prisma.SessionCreateManyInput> = z.object({
  sid: z.string(),
  sess: z.union([JsonNullValueInputSchema, jsonSchema]),
  expire: z.date()
}).strict();
export const SessionCreateManyInputObjectZodSchema = z.object({
  sid: z.string(),
  sess: z.union([JsonNullValueInputSchema, jsonSchema]),
  expire: z.date()
}).strict();
