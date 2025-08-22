import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionScalarWhereInputObjectSchema } from './PermissionScalarWhereInput.schema';
import { PermissionUpdateManyMutationInputObjectSchema } from './PermissionUpdateManyMutationInput.schema';
import { PermissionUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './PermissionUncheckedUpdateManyWithoutCreatedByInput.schema'

export const PermissionUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PermissionUpdateManyWithWhereWithoutCreatedByInput, Prisma.PermissionUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PermissionUpdateManyMutationInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const PermissionUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PermissionUpdateManyMutationInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
