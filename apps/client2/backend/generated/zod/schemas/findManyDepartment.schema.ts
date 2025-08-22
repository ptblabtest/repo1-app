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

export const DepartmentFindManySelectSchema: z.ZodType<Prisma.DepartmentSelect, Prisma.DepartmentSelect> = z.object({
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

export const DepartmentFindManySelectZodSchema = z.object({
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

export const DepartmentFindManySchema: z.ZodType<Prisma.DepartmentFindManyArgs, Prisma.DepartmentFindManyArgs> = z.object({ select: DepartmentFindManySelectSchema.optional(), include: z.lazy(() => DepartmentIncludeObjectSchema.optional()), orderBy: z.union([DepartmentOrderByWithRelationInputObjectSchema, DepartmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentWhereInputObjectSchema.optional(), cursor: DepartmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DepartmentScalarFieldEnumSchema, DepartmentScalarFieldEnumSchema.array()]).optional() }).strict();

export const DepartmentFindManyZodSchema = z.object({ select: DepartmentFindManySelectSchema.optional(), include: z.lazy(() => DepartmentIncludeObjectSchema.optional()), orderBy: z.union([DepartmentOrderByWithRelationInputObjectSchema, DepartmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: DepartmentWhereInputObjectSchema.optional(), cursor: DepartmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DepartmentScalarFieldEnumSchema, DepartmentScalarFieldEnumSchema.array()]).optional() }).strict();