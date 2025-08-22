import { z } from 'zod';
import type { Prisma } from '../../../prisma';
import { FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutReportInputObjectSchema } from './FileUncheckedUpdateManyWithoutReportInput.schema'

export const FileUpdateManyWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutReportInput, Prisma.FileUpdateManyWithWhereWithoutReportInput> = z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutReportInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutReportInputObjectZodSchema = z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutReportInputObjectSchema)])
}).strict();
