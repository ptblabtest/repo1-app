import { z } from 'zod';

export const NoteScalarFieldEnumSchema = z.enum(['id', 'description', 'createdAt', 'updatedAt', 'createdById', 'updatedById', 'reportId'])