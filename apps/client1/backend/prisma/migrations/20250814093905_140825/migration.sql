/*
  Warnings:

  - You are about to drop the column `approvedDate` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `reviewedById` on the `Payment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Payment" DROP CONSTRAINT "Payment_reviewedById_fkey";

-- AlterTable
ALTER TABLE "public"."Expense" ADD COLUMN     "reviewDate" TIMESTAMP(3),
ADD COLUMN     "reviewedById" TEXT;

-- AlterTable
ALTER TABLE "public"."Payment" DROP COLUMN "approvedDate",
DROP COLUMN "reviewedById";

-- AddForeignKey
ALTER TABLE "public"."Expense" ADD CONSTRAINT "Expense_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
