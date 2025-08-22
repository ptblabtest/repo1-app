import { z } from 'zod';

export const UserPermissionScalarFieldEnumSchema = z.enum(['id', 'userId', 'permissionId', 'createdAt', 'createdById', 'updatedById'])