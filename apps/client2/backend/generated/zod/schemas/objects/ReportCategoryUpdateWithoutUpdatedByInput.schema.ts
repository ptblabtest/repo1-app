import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema } from './ReportCategoryUpdateOneWithoutChildrenNestedInput.schema';
import { ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema } from './ReportCategoryUpdateManyWithoutParentNestedInput.schema';
import { UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorReportCategoryNestedInput.schema';
import { ReportUpdateManyWithoutCategoryNestedInputObjectSchema } from './ReportUpdateManyWithoutCategoryNestedInput.schema'

export const ReportCategoryUpdateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateWithoutUpdatedByInput, Prisma.ReportCategoryUpdateWithoutUpdatedByInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ReportCategoryUpdateWithoutUpdatedByInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
