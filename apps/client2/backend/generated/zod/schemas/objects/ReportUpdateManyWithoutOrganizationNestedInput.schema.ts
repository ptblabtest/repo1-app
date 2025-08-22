import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { ReportCreateWithoutOrganizationInputObjectSchema } from './ReportCreateWithoutOrganizationInput.schema';
import { ReportUncheckedCreateWithoutOrganizationInputObjectSchema } from './ReportUncheckedCreateWithoutOrganizationInput.schema';
import { ReportCreateOrConnectWithoutOrganizationInputObjectSchema } from './ReportCreateOrConnectWithoutOrganizationInput.schema';
import { ReportUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { ReportCreateManyOrganizationInputEnvelopeObjectSchema } from './ReportCreateManyOrganizationInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { ReportUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './ReportUpdateManyWithWhereWithoutOrganizationInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

export const ReportUpdateManyWithoutOrganizationNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutOrganizationNestedInput, Prisma.ReportUpdateManyWithoutOrganizationNestedInput> = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutOrganizationNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
