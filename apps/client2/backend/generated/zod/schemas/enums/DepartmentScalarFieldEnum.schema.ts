import { z } from 'zod';

export const DepartmentScalarFieldEnumSchema = z.enum(['id', 'name', 'code', 'createdById', 'updatedById'])