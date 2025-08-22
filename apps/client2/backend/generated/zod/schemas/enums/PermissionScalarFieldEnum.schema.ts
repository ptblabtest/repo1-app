import { z } from 'zod';

export const PermissionScalarFieldEnumSchema = z.enum(['id', 'name', 'resource', 'action', 'description', 'createdAt', 'updatedAt', 'createdById', 'updatedById'])