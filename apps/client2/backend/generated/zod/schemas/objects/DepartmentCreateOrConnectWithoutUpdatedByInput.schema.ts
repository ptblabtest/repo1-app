import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentCreateWithoutUpdatedByInputObjectSchema } from './DepartmentCreateWithoutUpdatedByInput.schema';
import { DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema } from './DepartmentUncheckedCreateWithoutUpdatedByInput.schema'

export const DepartmentCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutUpdatedByInput, Prisma.DepartmentCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const DepartmentCreateOrConnectWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
