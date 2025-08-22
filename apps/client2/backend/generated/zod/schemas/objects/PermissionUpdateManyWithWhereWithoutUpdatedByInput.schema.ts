import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { PermissionScalarWhereInputObjectSchema } from './PermissionScalarWhereInput.schema';
import { PermissionUpdateManyMutationInputObjectSchema } from './PermissionUpdateManyMutationInput.schema';
import { PermissionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './PermissionUncheckedUpdateManyWithoutUpdatedByInput.schema'

export const PermissionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.PermissionUpdateManyWithWhereWithoutUpdatedByInput, Prisma.PermissionUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => PermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PermissionUpdateManyMutationInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const PermissionUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => PermissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PermissionUpdateManyMutationInputObjectSchema), z.lazy(() => PermissionUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
