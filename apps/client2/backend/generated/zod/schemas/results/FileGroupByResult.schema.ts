import { z } from 'zod';
export const FileGroupByResultSchema = z.array(z.object({
  id: z.string(),
  filename: z.string(),
  path: z.string(),
  mimeType: z.string(),
  size: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  reportId: z.string(),
  _count: z.object({
    id: z.number(),
    filename: z.number(),
    path: z.number(),
    mimeType: z.number(),
    size: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    report: z.number(),
    reportId: z.number()
  }).optional(),
  _sum: z.object({
    size: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    size: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    filename: z.string().nullable(),
    path: z.string().nullable(),
    mimeType: z.string().nullable(),
    size: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    reportId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    filename: z.string().nullable(),
    path: z.string().nullable(),
    mimeType: z.string().nullable(),
    size: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    reportId: z.string().nullable()
  }).nullable().optional()
}));