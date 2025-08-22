import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateManyCreatedByInputObjectSchema } from './DepartmentCreateManyCreatedByInput.schema'

export const DepartmentCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.DepartmentCreateManyCreatedByInputEnvelope, Prisma.DepartmentCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => DepartmentCreateManyCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DepartmentCreateManyCreatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => DepartmentCreateManyCreatedByInputObjectSchema), z.lazy(() => DepartmentCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
