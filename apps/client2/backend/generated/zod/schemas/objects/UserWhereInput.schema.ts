import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumUserStatusFilterObjectSchema } from './EnumUserStatusFilter.schema';
import { UserStatusSchema } from '../enums/UserStatus.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DepartmentNullableScalarRelationFilterObjectSchema } from './DepartmentNullableScalarRelationFilter.schema';
import { DepartmentWhereInputObjectSchema } from './DepartmentWhereInput.schema';
import { OrganizationNullableScalarRelationFilterObjectSchema } from './OrganizationNullableScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { RoleNullableScalarRelationFilterObjectSchema } from './RoleNullableScalarRelationFilter.schema';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';
import { UserPermissionListRelationFilterObjectSchema } from './UserPermissionListRelationFilter.schema';
import { ProfileNullableScalarRelationFilterObjectSchema } from './ProfileNullableScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { NoteListRelationFilterObjectSchema } from './NoteListRelationFilter.schema';
import { StageListRelationFilterObjectSchema } from './StageListRelationFilter.schema';
import { ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema';
import { ReportCategoryListRelationFilterObjectSchema } from './ReportCategoryListRelationFilter.schema';
import { DepartmentListRelationFilterObjectSchema } from './DepartmentListRelationFilter.schema';
import { PermissionListRelationFilterObjectSchema } from './PermissionListRelationFilter.schema';
import { DepartmentPermissionListRelationFilterObjectSchema } from './DepartmentPermissionListRelationFilter.schema';
import { ProfileListRelationFilterObjectSchema } from './ProfileListRelationFilter.schema'

export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput, Prisma.UserWhereInput> = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumUserStatusFilterObjectSchema), UserStatusSchema]).optional(),
  departmentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  organizationId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  roleId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  department: z.union([z.lazy(() => DepartmentNullableScalarRelationFilterObjectSchema), z.lazy(() => DepartmentWhereInputObjectSchema)]).nullish(),
  organization: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).nullish(),
  role: z.union([z.lazy(() => RoleNullableScalarRelationFilterObjectSchema), z.lazy(() => RoleWhereInputObjectSchema)]).nullish(),
  permissions: z.lazy(() => UserPermissionListRelationFilterObjectSchema).optional(),
  profile: z.union([z.lazy(() => ProfileNullableScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).nullish(),
  CreatorNote: z.lazy(() => NoteListRelationFilterObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteListRelationFilterObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageListRelationFilterObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageListRelationFilterObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryListRelationFilterObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryListRelationFilterObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentListRelationFilterObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentListRelationFilterObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionListRelationFilterObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionListRelationFilterObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionListRelationFilterObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionListRelationFilterObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionListRelationFilterObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionListRelationFilterObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileListRelationFilterObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumUserStatusFilterObjectSchema), UserStatusSchema]).optional(),
  departmentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  organizationId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  roleId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  department: z.union([z.lazy(() => DepartmentNullableScalarRelationFilterObjectSchema), z.lazy(() => DepartmentWhereInputObjectSchema)]).nullish(),
  organization: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).nullish(),
  role: z.union([z.lazy(() => RoleNullableScalarRelationFilterObjectSchema), z.lazy(() => RoleWhereInputObjectSchema)]).nullish(),
  permissions: z.lazy(() => UserPermissionListRelationFilterObjectSchema).optional(),
  profile: z.union([z.lazy(() => ProfileNullableScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).nullish(),
  CreatorNote: z.lazy(() => NoteListRelationFilterObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteListRelationFilterObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageListRelationFilterObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageListRelationFilterObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryListRelationFilterObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryListRelationFilterObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentListRelationFilterObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentListRelationFilterObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionListRelationFilterObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionListRelationFilterObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionListRelationFilterObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionListRelationFilterObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionListRelationFilterObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionListRelationFilterObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileListRelationFilterObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileListRelationFilterObjectSchema).optional()
}).strict();
