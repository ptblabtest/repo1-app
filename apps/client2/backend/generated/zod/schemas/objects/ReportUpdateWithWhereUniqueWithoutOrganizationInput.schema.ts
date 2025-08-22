import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutOrganizationInputObjectSchema } from './ReportUpdateWithoutOrganizationInput.schema';
import { ReportUncheckedUpdateWithoutOrganizationInputObjectSchema } from './ReportUncheckedUpdateWithoutOrganizationInput.schema'

export const ReportUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutOrganizationInput, Prisma.ReportUpdateWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
