import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';
import { DepartmentArgsObjectSchema } from './objects/DepartmentArgs.schema';
import { OrganizationArgsObjectSchema } from './objects/OrganizationArgs.schema';
import { RoleArgsObjectSchema } from './objects/RoleArgs.schema';
import { UserPermissionArgsObjectSchema } from './objects/UserPermissionArgs.schema';
import { ProfileArgsObjectSchema } from './objects/ProfileArgs.schema';
import { NoteArgsObjectSchema } from './objects/NoteArgs.schema';
import { StageArgsObjectSchema } from './objects/StageArgs.schema';
import { ReportArgsObjectSchema } from './objects/ReportArgs.schema';
import { ReportCategoryArgsObjectSchema } from './objects/ReportCategoryArgs.schema';
import { PermissionArgsObjectSchema } from './objects/PermissionArgs.schema';
import { DepartmentPermissionArgsObjectSchema } from './objects/DepartmentPermissionArgs.schema';
import { UserCountOutputTypeArgsObjectSchema } from './objects/UserCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserSelect, Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    department: z.boolean().optional(),
    departmentId: z.boolean().optional(),
    organization: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    role: z.boolean().optional(),
    roleId: z.boolean().optional(),
    permissions: z.boolean().optional(),
    profile: z.boolean().optional(),
    CreatorNote: z.boolean().optional(),
    UpdaterNote: z.boolean().optional(),
    CreatorStage: z.boolean().optional(),
    UpdaterStage: z.boolean().optional(),
    CreatorReport: z.boolean().optional(),
    UpdaterReport: z.boolean().optional(),
    CreatorReportCategory: z.boolean().optional(),
    UpdaterReportCategory: z.boolean().optional(),
    CreatorDepartment: z.boolean().optional(),
    UpdaterDepartment: z.boolean().optional(),
    CreatorPermission: z.boolean().optional(),
    UpdaterPermission: z.boolean().optional(),
    CreatorDepartmentPermission: z.boolean().optional(),
    UpdaterDepartmentPermission: z.boolean().optional(),
    CreatorUserPermission: z.boolean().optional(),
    UpdaterUserPermission: z.boolean().optional(),
    CreatorProfile: z.boolean().optional(),
    UpdaterProfile: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UserFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    department: z.boolean().optional(),
    departmentId: z.boolean().optional(),
    organization: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    role: z.boolean().optional(),
    roleId: z.boolean().optional(),
    permissions: z.boolean().optional(),
    profile: z.boolean().optional(),
    CreatorNote: z.boolean().optional(),
    UpdaterNote: z.boolean().optional(),
    CreatorStage: z.boolean().optional(),
    UpdaterStage: z.boolean().optional(),
    CreatorReport: z.boolean().optional(),
    UpdaterReport: z.boolean().optional(),
    CreatorReportCategory: z.boolean().optional(),
    UpdaterReportCategory: z.boolean().optional(),
    CreatorDepartment: z.boolean().optional(),
    UpdaterDepartment: z.boolean().optional(),
    CreatorPermission: z.boolean().optional(),
    UpdaterPermission: z.boolean().optional(),
    CreatorDepartmentPermission: z.boolean().optional(),
    UpdaterDepartmentPermission: z.boolean().optional(),
    CreatorUserPermission: z.boolean().optional(),
    UpdaterUserPermission: z.boolean().optional(),
    CreatorProfile: z.boolean().optional(),
    UpdaterProfile: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UserFindFirstOrThrowSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs, Prisma.UserFindFirstOrThrowArgs> = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();

export const UserFindFirstOrThrowZodSchema = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();