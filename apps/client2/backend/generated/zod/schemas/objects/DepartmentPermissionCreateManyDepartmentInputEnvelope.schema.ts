import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentPermissionCreateManyDepartmentInputObjectSchema } from './DepartmentPermissionCreateManyDepartmentInput.schema'

export const DepartmentPermissionCreateManyDepartmentInputEnvelopeObjectSchema: z.ZodType<Prisma.DepartmentPermissionCreateManyDepartmentInputEnvelope, Prisma.DepartmentPermissionCreateManyDepartmentInputEnvelope> = z.object({
  data: z.union([z.lazy(() => DepartmentPermissionCreateManyDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateManyDepartmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DepartmentPermissionCreateManyDepartmentInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => DepartmentPermissionCreateManyDepartmentInputObjectSchema), z.lazy(() => DepartmentPermissionCreateManyDepartmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
