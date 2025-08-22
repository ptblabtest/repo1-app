import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrganizationCreateWithoutReportInputObjectSchema } from './OrganizationCreateWithoutReportInput.schema';
import { OrganizationUncheckedCreateWithoutReportInputObjectSchema } from './OrganizationUncheckedCreateWithoutReportInput.schema';
import { OrganizationCreateOrConnectWithoutReportInputObjectSchema } from './OrganizationCreateOrConnectWithoutReportInput.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

export const OrganizationCreateNestedOneWithoutReportInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutReportInput, Prisma.OrganizationCreateNestedOneWithoutReportInput> = z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutReportInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
