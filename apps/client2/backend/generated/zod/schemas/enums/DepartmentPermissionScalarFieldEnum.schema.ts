import { z } from 'zod';

export const DepartmentPermissionScalarFieldEnumSchema = z.enum(['id', 'departmentId', 'permissionId', 'createdAt', 'createdById', 'updatedById'])