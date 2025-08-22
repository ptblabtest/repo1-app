import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { DepartmentCreateNestedOneWithoutUsersInputObjectSchema } from './DepartmentCreateNestedOneWithoutUsersInput.schema';
import { OrganizationCreateNestedOneWithoutUsersInputObjectSchema } from './OrganizationCreateNestedOneWithoutUsersInput.schema';
import { RoleCreateNestedOneWithoutUsersInputObjectSchema } from './RoleCreateNestedOneWithoutUsersInput.schema';
import { UserPermissionCreateNestedManyWithoutUserInputObjectSchema } from './UserPermissionCreateNestedManyWithoutUserInput.schema';
import { ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema';
import { NoteCreateNestedManyWithoutCreatedByInputObjectSchema } from './NoteCreateNestedManyWithoutCreatedByInput.schema';
import { NoteCreateNestedManyWithoutUpdatedByInputObjectSchema } from './NoteCreateNestedManyWithoutUpdatedByInput.schema';
import { StageCreateNestedManyWithoutCreatedByInputObjectSchema } from './StageCreateNestedManyWithoutCreatedByInput.schema';
import { StageCreateNestedManyWithoutUpdatedByInputObjectSchema } from './StageCreateNestedManyWithoutUpdatedByInput.schema';
import { ReportCreateNestedManyWithoutCreatedByInputObjectSchema } from './ReportCreateNestedManyWithoutCreatedByInput.schema';
import { ReportCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ReportCreateNestedManyWithoutUpdatedByInput.schema';
import { ReportCategoryCreateNestedManyWithoutCreatedByInputObjectSchema } from './ReportCategoryCreateNestedManyWithoutCreatedByInput.schema';
import { ReportCategoryCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ReportCategoryCreateNestedManyWithoutUpdatedByInput.schema';
import { DepartmentCreateNestedManyWithoutCreatedByInputObjectSchema } from './DepartmentCreateNestedManyWithoutCreatedByInput.schema';
import { DepartmentCreateNestedManyWithoutUpdatedByInputObjectSchema } from './DepartmentCreateNestedManyWithoutUpdatedByInput.schema';
import { PermissionCreateNestedManyWithoutCreatedByInputObjectSchema } from './PermissionCreateNestedManyWithoutCreatedByInput.schema';
import { PermissionCreateNestedManyWithoutUpdatedByInputObjectSchema } from './PermissionCreateNestedManyWithoutUpdatedByInput.schema';
import { DepartmentPermissionCreateNestedManyWithoutCreatedByInputObjectSchema } from './DepartmentPermissionCreateNestedManyWithoutCreatedByInput.schema';
import { UserPermissionCreateNestedManyWithoutCreatedByInputObjectSchema } from './UserPermissionCreateNestedManyWithoutCreatedByInput.schema';
import { UserPermissionCreateNestedManyWithoutUpdatedByInputObjectSchema } from './UserPermissionCreateNestedManyWithoutUpdatedByInput.schema';
import { ProfileCreateNestedManyWithoutCreatedByInputObjectSchema } from './ProfileCreateNestedManyWithoutCreatedByInput.schema';
import { ProfileCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ProfileCreateNestedManyWithoutUpdatedByInput.schema'

export const UserCreateWithoutUpdaterDepartmentPermissionInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutUpdaterDepartmentPermissionInput, Prisma.UserCreateWithoutUpdaterDepartmentPermissionInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  role: z.lazy(() => RoleCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  permissions: z.lazy(() => UserPermissionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileCreateNestedManyWithoutUpdatedByInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutUpdaterDepartmentPermissionInputObjectZodSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  status: UserStatusSchema.optional(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  role: z.lazy(() => RoleCreateNestedOneWithoutUsersInputObjectSchema).optional(),
  permissions: z.lazy(() => UserPermissionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileCreateNestedManyWithoutUpdatedByInputObjectSchema).optional()
}).strict();
