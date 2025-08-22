import type { Prisma } from '../../prisma';
import { z } from 'zod';
import { OrganizationIncludeObjectSchema } from './objects/OrganizationInclude.schema';
import { OrganizationOrderByWithRelationInputObjectSchema } from './objects/OrganizationOrderByWithRelationInput.schema';
import { OrganizationWhereInputObjectSchema } from './objects/OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';
import { OrganizationScalarFieldEnumSchema } from './enums/OrganizationScalarFieldEnum.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { ReportArgsObjectSchema } from './objects/ReportArgs.schema';
import { OrganizationCountOutputTypeArgsObjectSchema } from './objects/OrganizationCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrganizationFindFirstSelectSchema: z.ZodType<Prisma.OrganizationSelect, Prisma.OrganizationSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    users: z.boolean().optional(),
    Report: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const OrganizationFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    users: z.boolean().optional(),
    Report: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const OrganizationFindFirstSchema: z.ZodType<Prisma.OrganizationFindFirstArgs, Prisma.OrganizationFindFirstArgs> = z.object({ select: OrganizationFindFirstSelectSchema.optional(), include: z.lazy(() => OrganizationIncludeObjectSchema.optional()), orderBy: z.union([OrganizationOrderByWithRelationInputObjectSchema, OrganizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganizationWhereInputObjectSchema.optional(), cursor: OrganizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrganizationScalarFieldEnumSchema, OrganizationScalarFieldEnumSchema.array()]).optional() }).strict();

export const OrganizationFindFirstZodSchema = z.object({ select: OrganizationFindFirstSelectSchema.optional(), include: z.lazy(() => OrganizationIncludeObjectSchema.optional()), orderBy: z.union([OrganizationOrderByWithRelationInputObjectSchema, OrganizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganizationWhereInputObjectSchema.optional(), cursor: OrganizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrganizationScalarFieldEnumSchema, OrganizationScalarFieldEnumSchema.array()]).optional() }).strict();