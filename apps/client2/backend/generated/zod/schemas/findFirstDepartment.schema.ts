import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { DepartmentIncludeObjectSchema } from './objects/DepartmentInclude.schema';
import { DepartmentOrderByWithRelationInputObjectSchema } from './objects/DepartmentOrderByWithRelationInput.schema';
import { DepartmentWhereInputObjectSchema } from './objects/DepartmentWhereInput.schema';
import { DepartmentWhereUniqueInputObjectSchema } from './objects/DepartmentWhereUniqueInput.schema';
import { DepartmentScalarFieldEnumSchema } from './enums/DepartmentScalarFieldEnum.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { DepartmentPermissionArgsObjectSchema } from './objects/DepartmentPermissionArgs.schema';
import { DepartmentCountOutputTypeArgsObjectSchema } from './objects/DepartmentCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DepartmentFindFirstSelectSchema: z.ZodType<Prisma.DepartmentSelect, Prisma.DepartmentSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    users: z.boolean().optional(),
    permissions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DepartmentFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    users: z.boolean().optional(),
    permissions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DepartmentFindFirstSchema: z.ZodType<Prisma.DepartmentFindFirstArgs, Prisma.DepartmentFindFirstArgs> = z.object({ select: DepartmentFindFirstSelectSchema.optional(), include: z.lazy(() => DepartmentIncludeObjectSchema.optional()), orderBy: z.union([DepartmentOrderByWithRelationInputObjectSchema, DepartmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentWhereInputObjectSchema.optional(), cursor: DepartmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DepartmentScalarFieldEnumSchema, DepartmentScalarFieldEnumSchema.array()]).optional() }).strict();

export const DepartmentFindFirstZodSchema = z.object({ select: DepartmentFindFirstSelectSchema.optional(), include: z.lazy(() => DepartmentIncludeObjectSchema.optional()), orderBy: z.union([DepartmentOrderByWithRelationInputObjectSchema, DepartmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentWhereInputObjectSchema.optional(), cursor: DepartmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DepartmentScalarFieldEnumSchema, DepartmentScalarFieldEnumSchema.array()]).optional() }).strict();