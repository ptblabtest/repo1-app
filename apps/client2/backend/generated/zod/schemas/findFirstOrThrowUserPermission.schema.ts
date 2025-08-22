import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { UserPermissionIncludeObjectSchema } from './objects/UserPermissionInclude.schema';
import { UserPermissionOrderByWithRelationInputObjectSchema } from './objects/UserPermissionOrderByWithRelationInput.schema';
import { UserPermissionWhereInputObjectSchema } from './objects/UserPermissionWhereInput.schema';
import { UserPermissionWhereUniqueInputObjectSchema } from './objects/UserPermissionWhereUniqueInput.schema';
import { UserPermissionScalarFieldEnumSchema } from './enums/UserPermissionScalarFieldEnum.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { PermissionArgsObjectSchema } from './objects/PermissionArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserPermissionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserPermissionSelect, Prisma.UserPermissionSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    permissionId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional(),
    permission: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional()
  }).strict();

export const UserPermissionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    permissionId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional(),
    permission: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional()
  }).strict();

export const UserPermissionFindFirstOrThrowSchema: z.ZodType<Prisma.UserPermissionFindFirstOrThrowArgs, Prisma.UserPermissionFindFirstOrThrowArgs> = z.object({ select: UserPermissionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserPermissionIncludeObjectSchema.optional()), orderBy: z.union([UserPermissionOrderByWithRelationInputObjectSchema, UserPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserPermissionWhereInputObjectSchema.optional(), cursor: UserPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserPermissionScalarFieldEnumSchema, UserPermissionScalarFieldEnumSchema.array()]).optional() }).strict();

export const UserPermissionFindFirstOrThrowZodSchema = z.object({ select: UserPermissionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserPermissionIncludeObjectSchema.optional()), orderBy: z.union([UserPermissionOrderByWithRelationInputObjectSchema, UserPermissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserPermissionWhereInputObjectSchema.optional(), cursor: UserPermissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserPermissionScalarFieldEnumSchema, UserPermissionScalarFieldEnumSchema.array()]).optional() }).strict();