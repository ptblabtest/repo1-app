import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'username', 'password', 'status', 'createdAt', 'updatedAt', 'departmentId', 'organizationId', 'roleId'])