import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentCreateWithoutCreatedByInputObjectSchema } from './DepartmentCreateWithoutCreatedByInput.schema';
import { DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema } from './DepartmentUncheckedCreateWithoutCreatedByInput.schema'

export const DepartmentCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutCreatedByInput, Prisma.DepartmentCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const DepartmentCreateOrConnectWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
