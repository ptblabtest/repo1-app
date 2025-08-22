import { z } from 'zod';

export const FileScalarFieldEnumSchema = z.enum(['id', 'filename', 'path', 'mimeType', 'size', 'createdAt', 'updatedAt', 'reportId'])