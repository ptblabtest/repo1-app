import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DepartmentOrderByWithRelationInputObjectSchema } from './DepartmentOrderByWithRelationInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { RoleOrderByWithRelationInputObjectSchema } from './RoleOrderByWithRelationInput.schema';
import { UserPermissionOrderByRelationAggregateInputObjectSchema } from './UserPermissionOrderByRelationAggregateInput.schema';
import { ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { NoteOrderByRelationAggregateInputObjectSchema } from './NoteOrderByRelationAggregateInput.schema';
import { StageOrderByRelationAggregateInputObjectSchema } from './StageOrderByRelationAggregateInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema';
import { ReportCategoryOrderByRelationAggregateInputObjectSchema } from './ReportCategoryOrderByRelationAggregateInput.schema';
import { DepartmentOrderByRelationAggregateInputObjectSchema } from './DepartmentOrderByRelationAggregateInput.schema';
import { PermissionOrderByRelationAggregateInputObjectSchema } from './PermissionOrderByRelationAggregateInput.schema';
import { DepartmentPermissionOrderByRelationAggregateInputObjectSchema } from './DepartmentPermissionOrderByRelationAggregateInput.schema';
import { ProfileOrderByRelationAggregateInputObjectSchema } from './ProfileOrderByRelationAggregateInput.schema'

export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput, Prisma.UserOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  departmentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  organizationId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  roleId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  department: z.lazy(() => DepartmentOrderByWithRelationInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  role: z.lazy(() => RoleOrderByWithRelationInputObjectSchema).optional(),
  permissions: z.lazy(() => UserPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  departmentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  organizationId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  roleId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  department: z.lazy(() => DepartmentOrderByWithRelationInputObjectSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  role: z.lazy(() => RoleOrderByWithRelationInputObjectSchema).optional(),
  permissions: z.lazy(() => UserPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  CreatorNote: z.lazy(() => NoteOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterNote: z.lazy(() => NoteOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorStage: z.lazy(() => StageOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterStage: z.lazy(() => StageOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorReport: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterReport: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorReportCategory: z.lazy(() => ReportCategoryOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterReportCategory: z.lazy(() => ReportCategoryOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorDepartment: z.lazy(() => DepartmentOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterDepartment: z.lazy(() => DepartmentOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorPermission: z.lazy(() => PermissionOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterPermission: z.lazy(() => PermissionOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorDepartmentPermission: z.lazy(() => DepartmentPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterDepartmentPermission: z.lazy(() => DepartmentPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorUserPermission: z.lazy(() => UserPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterUserPermission: z.lazy(() => UserPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  CreatorProfile: z.lazy(() => ProfileOrderByRelationAggregateInputObjectSchema).optional(),
  UpdaterProfile: z.lazy(() => ProfileOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
