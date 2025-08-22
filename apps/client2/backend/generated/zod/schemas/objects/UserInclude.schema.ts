import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { DepartmentArgsObjectSchema } from './DepartmentArgs.schema';
import { OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { RoleArgsObjectSchema } from './RoleArgs.schema';
import { UserPermissionFindManySchema } from '../findManyUserPermission.schema';
import { ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { NoteFindManySchema } from '../findManyNote.schema';
import { StageFindManySchema } from '../findManyStage.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { ReportCategoryFindManySchema } from '../findManyReportCategory.schema';
import { DepartmentFindManySchema } from '../findManyDepartment.schema';
import { PermissionFindManySchema } from '../findManyPermission.schema';
import { DepartmentPermissionFindManySchema } from '../findManyDepartmentPermission.schema';
import { ProfileFindManySchema } from '../findManyProfile.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude, Prisma.UserInclude> = z.object({
  department: z.union([z.boolean(), z.lazy(() => DepartmentArgsObjectSchema)]).optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => RoleArgsObjectSchema)]).optional(),
  permissions: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  CreatorNote: z.union([z.boolean(), z.lazy(() => NoteFindManySchema)]).optional(),
  UpdaterNote: z.union([z.boolean(), z.lazy(() => NoteFindManySchema)]).optional(),
  CreatorStage: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  UpdaterStage: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  CreatorReport: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  UpdaterReport: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  CreatorReportCategory: z.union([z.boolean(), z.lazy(() => ReportCategoryFindManySchema)]).optional(),
  UpdaterReportCategory: z.union([z.boolean(), z.lazy(() => ReportCategoryFindManySchema)]).optional(),
  CreatorDepartment: z.union([z.boolean(), z.lazy(() => DepartmentFindManySchema)]).optional(),
  UpdaterDepartment: z.union([z.boolean(), z.lazy(() => DepartmentFindManySchema)]).optional(),
  CreatorPermission: z.union([z.boolean(), z.lazy(() => PermissionFindManySchema)]).optional(),
  UpdaterPermission: z.union([z.boolean(), z.lazy(() => PermissionFindManySchema)]).optional(),
  CreatorDepartmentPermission: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  UpdaterDepartmentPermission: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  CreatorUserPermission: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  UpdaterUserPermission: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  CreatorProfile: z.union([z.boolean(), z.lazy(() => ProfileFindManySchema)]).optional(),
  UpdaterProfile: z.union([z.boolean(), z.lazy(() => ProfileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectZodSchema = z.object({
  department: z.union([z.boolean(), z.lazy(() => DepartmentArgsObjectSchema)]).optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => RoleArgsObjectSchema)]).optional(),
  permissions: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  profile: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  CreatorNote: z.union([z.boolean(), z.lazy(() => NoteFindManySchema)]).optional(),
  UpdaterNote: z.union([z.boolean(), z.lazy(() => NoteFindManySchema)]).optional(),
  CreatorStage: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  UpdaterStage: z.union([z.boolean(), z.lazy(() => StageFindManySchema)]).optional(),
  CreatorReport: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  UpdaterReport: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  CreatorReportCategory: z.union([z.boolean(), z.lazy(() => ReportCategoryFindManySchema)]).optional(),
  UpdaterReportCategory: z.union([z.boolean(), z.lazy(() => ReportCategoryFindManySchema)]).optional(),
  CreatorDepartment: z.union([z.boolean(), z.lazy(() => DepartmentFindManySchema)]).optional(),
  UpdaterDepartment: z.union([z.boolean(), z.lazy(() => DepartmentFindManySchema)]).optional(),
  CreatorPermission: z.union([z.boolean(), z.lazy(() => PermissionFindManySchema)]).optional(),
  UpdaterPermission: z.union([z.boolean(), z.lazy(() => PermissionFindManySchema)]).optional(),
  CreatorDepartmentPermission: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  UpdaterDepartmentPermission: z.union([z.boolean(), z.lazy(() => DepartmentPermissionFindManySchema)]).optional(),
  CreatorUserPermission: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  UpdaterUserPermission: z.union([z.boolean(), z.lazy(() => UserPermissionFindManySchema)]).optional(),
  CreatorProfile: z.union([z.boolean(), z.lazy(() => ProfileFindManySchema)]).optional(),
  UpdaterProfile: z.union([z.boolean(), z.lazy(() => ProfileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
