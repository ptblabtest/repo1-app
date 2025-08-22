import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithoutCreatedByInputObjectSchema } from './DepartmentUpdateWithoutCreatedByInput.schema';
import { DepartmentUncheckedUpdateWithoutCreatedByInputObjectSchema } from './DepartmentUncheckedUpdateWithoutCreatedByInput.schema'

export const DepartmentUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUpdateWithWhereUniqueWithoutCreatedByInput, Prisma.DepartmentUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const DepartmentUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DepartmentUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
