import { z } from 'zod';
export const ProfileGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  department: z.string(),
  position: z.string(),
  joinDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdById: z.string(),
  updatedById: z.string(),
  userId: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    department: z.number(),
    position: z.number(),
    joinDate: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    createdBy: z.number(),
    createdById: z.number(),
    updatedBy: z.number(),
    updatedById: z.number(),
    user: z.number(),
    userId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    department: z.string().nullable(),
    position: z.string().nullable(),
    joinDate: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    department: z.string().nullable(),
    position: z.string().nullable(),
    joinDate: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    createdById: z.string().nullable(),
    updatedById: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional()
}));