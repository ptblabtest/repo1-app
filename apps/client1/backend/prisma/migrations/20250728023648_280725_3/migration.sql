/*
  Warnings:

  - The `revision` column on the `Budget` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `revision` column on the `Contract` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `revision` column on the `Fund` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `revision` column on the `Invoice` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `revision` column on the `Milestone` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "revision",
ADD COLUMN     "revision" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "revision",
ADD COLUMN     "revision" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Fund" DROP COLUMN "revision",
ADD COLUMN     "revision" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "revision",
ADD COLUMN     "revision" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Milestone" DROP COLUMN "revision",
ADD COLUMN     "revision" DECIMAL(65,30);
