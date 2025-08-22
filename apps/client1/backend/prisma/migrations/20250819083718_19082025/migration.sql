/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceId` on the `Stage` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Account" DROP CONSTRAINT "Account_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Account" DROP CONSTRAINT "Account_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."CostType" DROP CONSTRAINT "CostType_accountId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Note" DROP CONSTRAINT "Note_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Payment" DROP CONSTRAINT "Payment_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Stage" DROP CONSTRAINT "Stage_invoiceId_fkey";

-- AlterTable
ALTER TABLE "public"."Note" DROP COLUMN "invoiceId";

-- AlterTable
ALTER TABLE "public"."Payment" DROP COLUMN "invoiceId";

-- AlterTable
ALTER TABLE "public"."Stage" DROP COLUMN "invoiceId";

-- DropTable
DROP TABLE "public"."Account";

-- DropTable
DROP TABLE "public"."Invoice";
