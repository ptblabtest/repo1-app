import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithoutUpdatedByInputObjectSchema } from './DepartmentUpdateWithoutUpdatedByInput.schema';
import { DepartmentUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './DepartmentUncheckedUpdateWithoutUpdatedByInput.schema';
import { DepartmentCreateWithoutUpdatedByInputObjectSchema } from './DepartmentCreateWithoutUpdatedByInput.schema';
import { DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema } from './DepartmentUncheckedCreateWithoutUpdatedByInput.schema'

export const DepartmentUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput, Prisma.DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const DepartmentUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
