import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutReportInputObjectSchema } from './OrganizationCreateWithoutReportInput.schema';
import { OrganizationUncheckedCreateWithoutReportInputObjectSchema } from './OrganizationUncheckedCreateWithoutReportInput.schema'

export const OrganizationCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutReportInput, Prisma.OrganizationCreateOrConnectWithoutReportInput> = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
