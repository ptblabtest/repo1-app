import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema } from './ReportCategoryUpdateManyWithoutParentNestedInput.schema';
import { UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorReportCategoryNestedInput.schema';
import { UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterReportCategoryNestedInput.schema';
import { ReportUpdateManyWithoutCategoryNestedInputObjectSchema } from './ReportUpdateManyWithoutCategoryNestedInput.schema'

export const ReportCategoryUpdateWithoutParentInputObjectSchema: z.ZodType<Prisma.ReportCategoryUpdateWithoutParentInput, Prisma.ReportCategoryUpdateWithoutParentInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  children: z.lazy(() => ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const ReportCategoryUpdateWithoutParentInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  children: z.lazy(() => ReportCategoryUpdateManyWithoutParentNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportCategoryNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportCategoryNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
