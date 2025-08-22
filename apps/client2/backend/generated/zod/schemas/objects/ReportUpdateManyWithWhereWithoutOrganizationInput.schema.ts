import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './ReportUncheckedUpdateManyWithoutOrganizationInput.schema'

export const ReportUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutOrganizationInput, Prisma.ReportUpdateManyWithWhereWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
