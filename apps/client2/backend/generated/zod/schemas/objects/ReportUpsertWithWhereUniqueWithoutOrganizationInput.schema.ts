import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutOrganizationInputObjectSchema } from './ReportUpdateWithoutOrganizationInput.schema';
import { ReportUncheckedUpdateWithoutOrganizationInputObjectSchema } from './ReportUncheckedUpdateWithoutOrganizationInput.schema';
import { ReportCreateWithoutOrganizationInputObjectSchema } from './ReportCreateWithoutOrganizationInput.schema';
import { ReportUncheckedCreateWithoutOrganizationInputObjectSchema } from './ReportUncheckedCreateWithoutOrganizationInput.schema'

export const ReportUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutOrganizationInput, Prisma.ReportUpsertWithWhereUniqueWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
