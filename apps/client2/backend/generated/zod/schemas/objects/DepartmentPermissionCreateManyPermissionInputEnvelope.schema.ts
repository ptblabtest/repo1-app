import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateManyPermissionInputObjectSchema } from './DepartmentPermissionCreateManyPermissionInput.schema'

export const DepartmentPermissionCreateManyPermissionInputEnvelopeObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateManyPermissionInputEnvelope, Prisma.DepartmentPermissionCreateManyPermissionInputEnvelope> = z.object({
  data: z.union([z.lazy(() => DepartmentPermissionCreateManyPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateManyPermissionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DepartmentPermissionCreateManyPermissionInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => DepartmentPermissionCreateManyPermissionInputObjectSchema), z.lazy(() => DepartmentPermissionCreateManyPermissionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
