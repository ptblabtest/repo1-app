import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { EnumUserStatusFieldUpdateOperationsInputObjectSchema } from './EnumUserStatusFieldUpdateOperationsInput.schema';
import { DepartmentUpdateOneWithoutUsersNestedInputObjectSchema } from './DepartmentUpdateOneWithoutUsersNestedInput.schema';
import { OrganizationUpdateOneWithoutUsersNestedInputObjectSchema } from './OrganizationUpdateOneWithoutUsersNestedInput.schema';
import { RoleUpdateOneWithoutUsersNestedInputObjectSchema } from './RoleUpdateOneWithoutUsersNestedInput.schema';
import { UserPermissionUpdateManyWithoutUserNestedInputObjectSchema } from './UserPermissionUpdateManyWithoutUserNestedInput.schema';
import { ProfileUpdateOneWithoutUserNestedInputObjectSchema } from './ProfileUpdateOneWithoutUserNestedInput.schema';
import { NoteUpdateManyWithoutCreatedByNestedInputObjectSchema } from './NoteUpdateManyWithoutCreatedByNestedInput.schema';
import { NoteUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './NoteUpdateManyWithoutUpdatedByNestedInput.schema';
import { StageUpdateManyWithoutCreatedByNestedInputObjectSchema } from './StageUpdateManyWithoutCreatedByNestedInput.schema';
import { StageUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './StageUpdateManyWithoutUpdatedByNestedInput.schema';
import { ReportUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ReportUpdateManyWithoutCreatedByNestedInput.schema';
import { ReportUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ReportUpdateManyWithoutUpdatedByNestedInput.schema';
import { ReportCategoryUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ReportCategoryUpdateManyWithoutCreatedByNestedInput.schema';
import { ReportCategoryUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ReportCategoryUpdateManyWithoutUpdatedByNestedInput.schema';
import { DepartmentUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './DepartmentUpdateManyWithoutUpdatedByNestedInput.schema';
import { PermissionUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PermissionUpdateManyWithoutCreatedByNestedInput.schema';
import { PermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './PermissionUpdateManyWithoutUpdatedByNestedInput.schema';
import { DepartmentPermissionUpdateManyWithoutCreatedByNestedInputObjectSchema } from './DepartmentPermissionUpdateManyWithoutCreatedByNestedInput.schema';
import { DepartmentPermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './DepartmentPermissionUpdateManyWithoutUpdatedByNestedInput.schema';
import { UserPermissionUpdateManyWithoutCreatedByNestedInputObjectSchema } from './UserPermissionUpdateManyWithoutCreatedByNestedInput.schema';
import { UserPermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './UserPermissionUpdateManyWithoutUpdatedByNestedInput.schema';
import { ProfileUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ProfileUpdateManyWithoutCreatedByNestedInput.schema';
import { ProfileUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ProfileUpdateManyWithoutUpdatedByNestedInput.schema'

export const UserUpdateWithoutCreatorDepartmentInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutCreatorDepartmentInput, Prisma.UserUpdateWithoutCreatorDepartmentInput> = z.object({
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  department: z.lazy(() => DepartmentUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
  role: z.lazy(() => RoleUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => UserPermissionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutCreatorDepartmentInputObjectZodSchema = z.object({
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([UserStatusSchema, z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  department: z.lazy(() => DepartmentUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
  role: z.lazy(() => RoleUpdateOneWithoutUsersNestedInputObjectSchema).optional(),
  permissions: z.lazy(() => UserPermissionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional()
}).strict();
