import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { OrganizationCreateWithoutReportInputObjectSchema } from './OrganizationCreateWithoutReportInput.schema';
import { OrganizationUncheckedCreateWithoutReportInputObjectSchema } from './OrganizationUncheckedCreateWithoutReportInput.schema';
import { OrganizationCreateOrConnectWithoutReportInputObjectSchema } from './OrganizationCreateOrConnectWithoutReportInput.schema';
import { OrganizationUpsertWithoutReportInputObjectSchema } from './OrganizationUpsertWithoutReportInput.schema';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutReportInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutReportInput.schema';
import { OrganizationUpdateWithoutReportInputObjectSchema } from './OrganizationUpdateWithoutReportInput.schema';
import { OrganizationUncheckedUpdateWithoutReportInputObjectSchema } from './OrganizationUncheckedUpdateWithoutReportInput.schema'

export const OrganizationUpdateOneWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutReportNestedInput, Prisma.OrganizationUpdateOneWithoutReportNestedInput> = z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutReportInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutReportInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutReportInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutReportNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutReportInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutReportInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutReportInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutReportInputObjectSchema)]).optional()
}).strict();
