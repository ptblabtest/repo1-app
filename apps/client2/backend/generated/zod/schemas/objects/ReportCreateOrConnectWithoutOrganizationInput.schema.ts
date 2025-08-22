import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutOrganizationInputObjectSchema } from './ReportCreateWithoutOrganizationInput.schema';
import { ReportUncheckedCreateWithoutOrganizationInputObjectSchema } from './ReportUncheckedCreateWithoutOrganizationInput.schema'

export const ReportCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutOrganizationInput, Prisma.ReportCreateOrConnectWithoutOrganizationInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutOrganizationInputObjectZodSchema = z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
