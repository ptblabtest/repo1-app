import { z } from 'zod';
export const ReportGroupByResultSchema = z.array(z.object({
  id: z.string(),
  categoryId: z.string(),
  periodYear: z.string(),
  periodMonth: z.string(),
  periodDate: z.string(),
  version: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdById: z.string(),
  updatedById: z.string(),
  organizationId: z.string(),
  _count: z.object({
    id: z.number(),
    category: z.number(),
    categoryId: z.number(),
    periodYear: z.number(),
    periodMonth: z.number(),
    periodDate: z.number(),
    version: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    createdBy: z.number(),
    createdById: z.number(),
    updatedBy: z.number(),
    updatedById: z.number(),
    organization: z.number(),
    organizationId: z.number(),
    notes: z.number(),
    stages: z.number(),
    files: z.number()
  }).optional(),
  _sum: z.object({
    version: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    version: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    categoryId: z.string().nullable(),
    periodYear: z.string().nullable(),
    periodMonth: z.string().nullable(),
    periodDate: z.string().nullable(),
    version: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    organizationId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    categoryId: z.string().nullable(),
    periodYear: z.string().nullable(),
    periodMonth: z.string().nullable(),
    periodDate: z.string().nullable(),
    version: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    organizationId: z.string().nullable()
  }).nullable().optional()
}));