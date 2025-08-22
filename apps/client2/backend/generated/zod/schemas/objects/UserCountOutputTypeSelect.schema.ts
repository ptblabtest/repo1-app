import { z } from 'zod';
import type { Prisma } from '../../../prisma';


export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect, Prisma.UserCountOutputTypeSelect> = z.object({
  permissions: z.boolean().optional(),
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
  UpdaterProfile: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectZodSchema = z.object({
  permissions: z.boolean().optional(),
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
  UpdaterProfile: z.boolean().optional()
}).strict();
