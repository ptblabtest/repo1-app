import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrganizationUpdateWithoutReportInputObjectSchema } from './OrganizationUpdateWithoutReportInput.schema';
import { OrganizationUncheckedUpdateWithoutReportInputObjectSchema } from './OrganizationUncheckedUpdateWithoutReportInput.schema';
import { OrganizationCreateWithoutReportInputObjectSchema } from './OrganizationCreateWithoutReportInput.schema';
import { OrganizationUncheckedCreateWithoutReportInputObjectSchema } from './OrganizationUncheckedCreateWithoutReportInput.schema';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

export const OrganizationUpsertWithoutReportInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutReportInput, Prisma.OrganizationUpsertWithoutReportInput> = z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutReportInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutReportInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutReportInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
