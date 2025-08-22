import { z } from 'zod';
export const NoteAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    description: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    createdBy: z.number(),
    createdById: z.number(),
    updatedBy: z.number(),
    updatedById: z.number(),
    report: z.number(),
    reportId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    reportId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    reportId: z.string().nullable()
  }).nullable().optional()});