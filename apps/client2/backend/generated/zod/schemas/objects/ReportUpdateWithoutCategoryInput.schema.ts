import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCreatorReportNestedInputObjectSchema } from './UserUpdateOneWithoutCreatorReportNestedInput.schema';
import { UserUpdateOneWithoutUpdaterReportNestedInputObjectSchema } from './UserUpdateOneWithoutUpdaterReportNestedInput.schema';
import { OrganizationUpdateOneWithoutReportNestedInputObjectSchema } from './OrganizationUpdateOneWithoutReportNestedInput.schema';
import { NoteUpdateManyWithoutReportNestedInputObjectSchema } from './NoteUpdateManyWithoutReportNestedInput.schema';
import { StageUpdateManyWithoutReportNestedInputObjectSchema } from './StageUpdateManyWithoutReportNestedInput.schema';
import { FileUpdateManyWithoutReportNestedInputObjectSchema } from './FileUpdateManyWithoutReportNestedInput.schema'

export const ReportUpdateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithoutCategoryInput, Prisma.ReportUpdateWithoutCategoryInput> = z.object({
  periodYear: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodMonth: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodDate: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportNestedInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutReportNestedInputObjectSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  stages: z.lazy(() => StageUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  files: z.lazy(() => FileUpdateManyWithoutReportNestedInputObjectSchema).optional()
}).strict();
export const ReportUpdateWithoutCategoryInputObjectZodSchema = z.object({
  periodYear: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodMonth: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodDate: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatorReportNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdaterReportNestedInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutReportNestedInputObjectSchema).optional(),
  notes: z.lazy(() => NoteUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  stages: z.lazy(() => StageUpdateManyWithoutReportNestedInputObjectSchema).optional(),
  files: z.lazy(() => FileUpdateManyWithoutReportNestedInputObjectSchema).optional()
}).strict();
