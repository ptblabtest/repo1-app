import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { EnumUserStatusFieldUpdateOperationsInputObjectSchema } from './EnumUserStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserPermissionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserPermissionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ProfileUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './ProfileUncheckedUpdateOneWithoutUserNestedInput.schema';
import { NoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './NoteUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { NoteUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './NoteUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { StageUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './StageUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { StageUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './StageUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { ReportCategoryUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ReportCategoryUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ReportCategoryUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ReportCategoryUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { DepartmentUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { PermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PermissionUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { PermissionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './PermissionUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { DepartmentPermissionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './DepartmentPermissionUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { UserPermissionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './UserPermissionUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { ProfileUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProfileUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ProfileUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProfileUncheckedUpdateManyWithoutUpdatedByNestedInput.schema'

export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput, Prisma.UserUncheckedUpdateInput> = z.object({
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  departmentId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  organizationId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  roleId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  permissions: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateInputObjectZodSchema = z.object({
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  departmentId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  organizationId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  roleId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  permissions: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional()
}).strict();
