import { z } from 'zod';

export const ReportCategoryScalarFieldEnumSchema = z.enum(['id', 'name', 'code', 'parentId', 'createdAt', 'updatedAt', 'createdById', 'updatedById'])