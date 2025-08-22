import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { DepartmentPermissionIncludeObjectSchema } from './objects/DepartmentPermissionInclude.schema';
import { DepartmentPermissionOrderByWithRelationInputObjectSchema } from './objects/DepartmentPermissionOrderByWithRelationInput.schema';
import { DepartmentPermissionWhereInputObjectSchema } from './objects/DepartmentPermissionWhereInput.schema';
import { DepartmentPermissionWhereUniqueInputObjectSchema } from './objects/DepartmentPermissionWhereUniqueInput.schema';
import { DepartmentPermissionScalarFieldEnumSchema } from './enums/DepartmentPermissionScalarFieldEnum.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { DepartmentArgsObjectSchema } from './objects/DepartmentArgs.schema';
import { PermissionArgsObjectSchema } from './objects/PermissionArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DepartmentPermissionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DepartmentPermissionSelect, Prisma.DepartmentPermissionSelect> = z.object({
    id: z.boolean().optional(),
    departmentId: z.boolean().optional(),
    permissionId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    department: z.boolean().optional(),
    permission: z.boolean().optional()
  }).strict();

export const DepartmentPermissionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    departmentId: z.boolean().optional(),
    permissionId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    department: z.boolean().optional(),
    permission: z.boolean().optional()
  }).strict();

export const DepartmentPermissionFindFirstOrThrowSchema: z.ZodType<Prisma.DepartmentPermissionFindFirstOrThrowArgs, Prisma.DepartmentPermissionFindFirstOrThrowArgs> = z.object({ select: DepartmentPermissionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DepartmentPermissionIncludeObjectSchema.optional()), orderBy: z.union([DepartmentPermissionOrderByWithRelationInputObjectSchema, DepartmentPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentPermissionWhereInputObjectSchema.optional(), cursor: DepartmentPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DepartmentPermissionScalarFieldEnumSchema, DepartmentPermissionScalarFieldEnumSchema.array()]).optional() }).strict();

export const DepartmentPermissionFindFirstOrThrowZodSchema = z.object({ select: DepartmentPermissionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DepartmentPermissionIncludeObjectSchema.optional()), orderBy: z.union([DepartmentPermissionOrderByWithRelationInputObjectSchema, DepartmentPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentPermissionWhereInputObjectSchema.optional(), cursor: DepartmentPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DepartmentPermissionScalarFieldEnumSchema, DepartmentPermissionScalarFieldEnumSchema.array()]).optional() }).strict();