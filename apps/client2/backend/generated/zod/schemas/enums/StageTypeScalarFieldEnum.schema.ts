import { z } from 'zod';

export const StageTypeScalarFieldEnumSchema = z.enum(['id', 'model', 'order', 'value', 'label'])