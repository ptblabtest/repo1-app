import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema } from './ReportCategoryUpdateOneWithoutChildrenNestedInput.schema';
import { ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema } from './ReportCategoryUpdateManyWithoutParentNestedInput.schema';
import { UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterReportCategoryNestedInput.schema';
import { ReportUpdateManyWithoutCategoryNestedInputObjectSchema } from './ReportUpdateManyWithoutCategoryNestedInput.schema'

export const ReportCategoryUpdateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateWithoutCreatedByInput, Prisma.ReportCategoryUpdateWithoutCreatedByInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ReportCategoryUpdateWithoutCreatedByInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
