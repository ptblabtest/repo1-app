import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutOrganizationInputObjectSchema } from './ReportCreateWithoutOrganizationInput.schema';
import { ReportUncheckedCreateWithoutOrganizationInputObjectSchema } from './ReportUncheckedCreateWithoutOrganizationInput.schema';
import { ReportCreateOrConnectWithoutOrganizationInputObjectSchema } from './ReportCreateOrConnectWithoutOrganizationInput.schema';
import { ReportCreateManyOrganizationInputEnvelopeObjectSchema } from './ReportCreateManyOrganizationInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

export const ReportUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutOrganizationInput, Prisma.ReportUncheckedCreateNestedManyWithoutOrganizationInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedCreateNestedManyWithoutOrganizationInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
