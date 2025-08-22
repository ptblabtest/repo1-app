import { z } from 'zod';
export const ReportCategoryGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  parentId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdById: z.string(),
  updatedById: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    code: z.number(),
    parent: z.number(),
    parentId: z.number(),
    children: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    createdBy: z.number(),
    createdById: z.number(),
    updatedBy: z.number(),
    updatedById: z.number(),
    reports: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    code: z.string().nullable(),
    parentId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    code: z.string().nullable(),
    parentId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable()
  }).nullable().optional()
}));