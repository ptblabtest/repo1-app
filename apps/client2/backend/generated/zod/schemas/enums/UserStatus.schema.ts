import { z } from 'zod';

export const UserStatusSchema = z.enum(['ACTIVE', 'INACTIVE', 'SUSPENDED'])