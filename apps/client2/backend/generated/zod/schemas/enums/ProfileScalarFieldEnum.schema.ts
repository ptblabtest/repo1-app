import { z } from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum(['id', 'name', 'department', 'position', 'joinDate', 'createdAt', 'updatedAt', 'createdById', 'updatedById', 'userId'])