import { z } from 'zod';
import { UserStatusSchema } from '../../enums/UserStatus.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    username: z.string(),
    password: z.string(),
    status: UserStatusSchema,
    department: z.unknown().optional().nullable(),
    departmentId: z.string().optional().nullable(),
    organization: z.unknown().optional().nullable(),
    organizationId: z.string().optional().nullable(),
    role: z.unknown().optional().nullable(),
    roleId: z.string().optional().nullable(),
    permissions: z.array(z.unknown()),
    profile: z.unknown().optional().nullable(),
    CreatorNote: z.array(z.unknown()),
    UpdaterNote: z.array(z.unknown()),
    CreatorStage: z.array(z.unknown()),
    UpdaterStage: z.array(z.unknown()),
    CreatorReport: z.array(z.unknown()),
    UpdaterReport: z.array(z.unknown()),
    CreatorReportCategory: z.array(z.unknown()),
    UpdaterReportCategory: z.array(z.unknown()),
    CreatorDepartment: z.array(z.unknown()),
    UpdaterDepartment: z.array(z.unknown()),
    CreatorPermission: z.array(z.unknown()),
    UpdaterPermission: z.array(z.unknown()),
    CreatorDepartmentPermission: z.array(z.unknown()),
    UpdaterDepartmentPermission: z.array(z.unknown()),
    CreatorUserPermission: z.array(z.unknown()),
    UpdaterUserPermission: z.array(z.unknown()),
    CreatorProfile: z.array(z.unknown()),
    UpdaterProfile: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
