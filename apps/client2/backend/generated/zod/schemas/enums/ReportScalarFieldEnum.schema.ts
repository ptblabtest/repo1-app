import { z } from 'zod';

export const ReportScalarFieldEnumSchema = z.enum(['id', 'categoryId', 'periodYear', 'periodMonth', 'periodDate', 'version', 'createdAt', 'updatedAt', 'createdById', 'updatedById', 'organizationId'])