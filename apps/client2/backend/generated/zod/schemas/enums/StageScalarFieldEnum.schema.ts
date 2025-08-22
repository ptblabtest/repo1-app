import { z } from 'zod';

export const StageScalarFieldEnumSchema = z.enum(['id', 'stageTypeId', 'comment', 'createdById', 'updatedById', 'createdAt', 'updatedAt', 'reportId'])