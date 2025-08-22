import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { PermissionIncludeObjectSchema } from './objects/PermissionInclude.schema';
import { PermissionOrderByWithRelationInputObjectSchema } from './objects/PermissionOrderByWithRelationInput.schema';
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema';
import { PermissionScalarFieldEnumSchema } from './enums/PermissionScalarFieldEnum.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { DepartmentPermissionArgsObjectSchema } from './objects/DepartmentPermissionArgs.schema';
import { UserPermissionArgsObjectSchema } from './objects/UserPermissionArgs.schema';
import { PermissionCountOutputTypeArgsObjectSchema } from './objects/PermissionCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PermissionFindManySelectSchema: z.ZodType<Prisma.PermissionSelect, Prisma.PermissionSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    resource: z.boolean().optional(),
    action: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    dept: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PermissionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    resource: z.boolean().optional(),
    action: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    dept: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PermissionFindManySchema: z.ZodType<Prisma.PermissionFindManyArgs, Prisma.PermissionFindManyArgs> = z.object({ select: PermissionFindManySelectSchema.optional(), include: z.lazy(() => PermissionIncludeObjectSchema.optional()), orderBy: z.union([PermissionOrderByWithRelationInputObjectSchema, PermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PermissionWhereInputObjectSchema.optional(), cursor: PermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PermissionScalarFieldEnumSchema, PermissionScalarFieldEnumSchema.array()]).optional() }).strict();

export const PermissionFindManyZodSchema = z.object({ select: PermissionFindManySelectSchema.optional(), include: z.lazy(() => PermissionIncludeObjectSchema.optional()), orderBy: z.union([PermissionOrderByWithRelationInputObjectSchema, PermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PermissionWhereInputObjectSchema.optional(), cursor: PermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PermissionScalarFieldEnumSchema, PermissionScalarFieldEnumSchema.array()]).optional() }).strict();