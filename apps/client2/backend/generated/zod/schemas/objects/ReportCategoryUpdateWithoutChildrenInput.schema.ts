import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema } from './ReportCategoryUpdateOneWithoutChildrenNestedInput.schema';
import { UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorReportCategoryNestedInput.schema';
import { UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterReportCategoryNestedInput.schema';
import { ReportUpdateManyWithoutCategoryNestedInputObjectSchema } from './ReportUpdateManyWithoutCategoryNestedInput.schema'

export const ReportCategoryUpdateWithoutChildrenInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateWithoutChildrenInput, Prisma.ReportCategoryUpdateWithoutChildrenInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ReportCategoryUpdateWithoutChildrenInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  parent: z.lazy(() => ReportCategoryUpdateOneWithoutChildrenNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
