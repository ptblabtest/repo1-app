import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateManyCreatedByInputObjectSchema } from './DepartmentPermissionCreateManyCreatedByInput.schema'

export const DepartmentPermissionCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateManyCreatedByInputEnvelope, Prisma.DepartmentPermissionCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([z.lazy(() => DepartmentPermissionCreateManyCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DepartmentPermissionCreateManyCreatedByInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => DepartmentPermissionCreateManyCreatedByInputObjectSchema), z.lazy(() => DepartmentPermissionCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
