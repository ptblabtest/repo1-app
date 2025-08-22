import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateManyOrganizationInputObjectSchema } from './ReportCreateManyOrganizationInput.schema'

export const ReportCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyOrganizationInputEnvelope, Prisma.ReportCreateManyOrganizationInputEnvelope> = z.object({
  data: z.union([z.lazy(() => ReportCreateManyOrganizationInputObjectSchema), z.lazy(() => ReportCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyOrganizationInputEnvelopeObjectZodSchema = z.object({
  data: z.union([z.lazy(() => ReportCreateManyOrganizationInputObjectSchema), z.lazy(() => ReportCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
