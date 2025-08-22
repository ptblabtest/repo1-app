import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutReportInputObjectSchema } from './OrganizationUpdateWithoutReportInput.schema';
import { OrganizationUncheckedUpdateWithoutReportInputObjectSchema } from './OrganizationUncheckedUpdateWithoutReportInput.schema'

export const OrganizationUpdateToOneWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutReportInput, Prisma.OrganizationUpdateToOneWithWhereWithoutReportInput> = z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
