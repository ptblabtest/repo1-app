import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentCreateManyUpdatedByInputObjectSchema } from './DepartmentCreateManyUpdatedByInput.schema'

export const DepartmentCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.DepartmentCreateManyUpdatedByInputEnvelope, Prisma.DepartmentCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => DepartmentCreateManyUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DepartmentCreateManyUpdatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => DepartmentCreateManyUpdatedByInputObjectSchema), z.lazy(() => DepartmentCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
