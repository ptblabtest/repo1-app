import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema } from './ReportCategoryUpdateOneWithoutChildrenNestedInput.schema';
import { ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema } from './ReportCategoryUpdateManyWithoutParentNestedInput.schema';
import { UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorReportCategoryNestedInput.schema';
import { UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterReportCategoryNestedInput.schema'

export const ReportCategoryUpdateWithoutReportsInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateWithoutReportsInput, Prisma.ReportCategoryUpdateWithoutReportsInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema).optional()
}).strict();
export const ReportCategoryUpdateWithoutReportsInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  children: z.lazy(() => ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema).optional()
}).strict();
