import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateManyUpdatedByInputObjectSchema } from './DepartmentPermissionCreateManyUpdatedByInput.schema'

export const DepartmentPermissionCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateManyUpdatedByInputEnvelope, Prisma.DepartmentPermissionCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => DepartmentPermissionCreateManyUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DepartmentPermissionCreateManyUpdatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => DepartmentPermissionCreateManyUpdatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
