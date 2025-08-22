import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutCategoryInputObjectSchema } from './ReportCreateWithoutCategoryInput.schema';
import { ReportUncheckedCreateWithoutCategoryInputObjectSchema } from './ReportUncheckedCreateWithoutCategoryInput.schema';
import { ReportCreateOrConnectWithoutCategoryInputObjectSchema } from './ReportCreateOrConnectWithoutCategoryInput.schema';
import { ReportCreateManyCategoryInputEnvelopeObjectSchema } from './ReportCreateManyCategoryInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

export const ReportCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutCategoryInput, Prisma.ReportCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutCategoryInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
