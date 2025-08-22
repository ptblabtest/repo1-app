import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { UserPermissionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserPermissionUncheckedCreateNestedManyWithoutUserInput.schema';
import { ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ProfileUncheckedCreateNestedOneWithoutUserInput.schema';
import { NoteUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './NoteUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { NoteUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './NoteUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { StageUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './StageUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { StageUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './StageUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ReportUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ReportUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ReportCategoryUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ReportCategoryUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ReportCategoryUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ReportCategoryUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { DepartmentUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './DepartmentUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { DepartmentUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { PermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './PermissionUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { PermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './PermissionUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { DepartmentPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './DepartmentPermissionUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { UserPermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { UserPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './UserPermissionUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ProfileUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProfileUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ProfileUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProfileUncheckedCreateNestedManyWithoutUpdatedByInput.schema'

export const UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCreatorDepartmentPermissionInput, Prisma.UserUncheckedCreateWithoutCreatorDepartmentPermissionInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  departmentId: z.string().nullish(),
  organizationId: z.string().nullish(),
  roleId: z.string().nullish(),
  permissions: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutCreatorDepartmentPermissionInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  departmentId: z.string().nullish(),
  organizationId: z.string().nullish(),
  roleId: z.string().nullish(),
  permissions: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional()
}).strict();
