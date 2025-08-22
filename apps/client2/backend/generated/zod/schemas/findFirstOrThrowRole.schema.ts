import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { RoleIncludeObjectSchema } from './objects/RoleInclude.schema';
import { RoleOrderByWithRelationInputObjectSchema } from './objects/RoleOrderByWithRelationInput.schema';
import { RoleWhereInputObjectSchema } from './objects/RoleWhereInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './objects/RoleWhereUniqueInput.schema';
import { RoleScalarFieldEnumSchema } from './enums/RoleScalarFieldEnum.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { RoleCountOutputTypeArgsObjectSchema } from './objects/RoleCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleFindFirstOrThrowSelectSchema: z.ZodType<Prisma.RoleSelect, Prisma.RoleSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    level: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const RoleFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    level: z.boolean().optional(),
    users: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const RoleFindFirstOrThrowSchema: z.ZodType<Prisma.RoleFindFirstOrThrowArgs, Prisma.RoleFindFirstOrThrowArgs> = z.object({ select: RoleFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RoleIncludeObjectSchema.optional()), orderBy: z.union([RoleOrderByWithRelationInputObjectSchema, RoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoleWhereInputObjectSchema.optional(), cursor: RoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array()]).optional() }).strict();

export const RoleFindFirstOrThrowZodSchema = z.object({ select: RoleFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RoleIncludeObjectSchema.optional()), orderBy: z.union([RoleOrderByWithRelationInputObjectSchema, RoleOrderByWithRelationInputObjectSchema.array()]).optional(), where: RoleWhereInputObjectSchema.optional(), cursor: RoleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array()]).optional() }).strict();