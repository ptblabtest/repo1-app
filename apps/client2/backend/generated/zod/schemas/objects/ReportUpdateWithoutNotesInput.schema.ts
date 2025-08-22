import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ReportCategoryUpdateOneRequiredWithoutReportsNestedInputObjectSchema } from './ReportCategoryUpdateOneRequiredWithoutReportsNestedInput.schema';
import { UserUpdateOneWithoutCreatorReportNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorReportNestedInput.schema';
import { UserUpdateOneWithoutUpdaterReportNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterReportNestedInput.schema';
import { OrganizationUpdateOneWithoutReportNestedInputObjectSchema } from './OrganizationUpdateOneWithoutReportNestedInput.schema';
import { StageUpdateManyWithoutReportNestedInputObjectSchema } from './StageUpdateManyWithoutReportNestedInput.schema';
import { FileUpdateManyWithoutReportNestedInputObjectSchema } from './FileUpdateManyWithoutReportNestedInput.schema'

export const ReportUpdateWithoutNotesInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithoutNotesInput, Prisma.ReportUpdateWithoutNotesInput> = z.object({
  periodYear: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodMonth: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodDate: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.lazy(() => ReportCategoryUpdateOneRequiredWithoutReportsNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportNestedInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutReportNestedInputObjectSchema).optional(),
  stages: z.lazy(() => StageUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  files: z.lazy(() => FileUpdateManyWithoutReportNestedInputObjectSchema).optional()
}).strict();
export const ReportUpdateWithoutNotesInputObjectZodSchema = z.object({
  periodYear: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodMonth: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodDate: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.lazy(() => ReportCategoryUpdateOneRequiredWithoutReportsNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportNestedInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutReportNestedInputObjectSchema).optional(),
  stages: z.lazy(() => StageUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  files: z.lazy(() => FileUpdateManyWithoutReportNestedInputObjectSchema).optional()
}).strict();
