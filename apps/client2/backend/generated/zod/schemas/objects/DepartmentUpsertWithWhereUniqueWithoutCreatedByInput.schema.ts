import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentWhereUniqueInputObjectSchema } from './DepartmentWhereUniqueInput.schema';
import { DepartmentUpdateWithoutCreatedByInputObjectSchema } from './DepartmentUpdateWithoutCreatedByInput.schema';
import { DepartmentUncheckedUpdateWithoutCreatedByInputObjectSchema } from './DepartmentUncheckedUpdateWithoutCreatedByInput.schema';
import { DepartmentCreateWithoutCreatedByInputObjectSchema } from './DepartmentCreateWithoutCreatedByInput.schema';
import { DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema } from './DepartmentUncheckedCreateWithoutCreatedByInput.schema'

export const DepartmentUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.DepartmentUpsertWithWhereUniqueWithoutCreatedByInput, Prisma.DepartmentUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const DepartmentUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DepartmentUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => DepartmentCreateWithoutCreatedByInputObjectSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
