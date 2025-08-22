import { z } from 'zod';
export const StageGroupByResultSchema = z.array(z.object({
  id: z.string(),
  stageTypeId: z.string(),
  comment: z.string(),
  createdById: z.string(),
  updatedById: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  reportId: z.string(),
  _count: z.object({
    id: z.number(),
    stageTypeId: z.number(),
    comment: z.number(),
    createdById: z.number(),
    updatedById: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    type: z.number(),
    createdBy: z.number(),
    updatedBy: z.number(),
    report: z.number(),
    reportId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    stageTypeId: z.string().nullable(),
    comment: z.string().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    reportId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    stageTypeId: z.string().nullable(),
    comment: z.string().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    reportId: z.string().nullable()
  }).nullable().optional()
}));