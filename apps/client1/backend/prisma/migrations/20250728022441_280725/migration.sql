/*
  Warnings:

  - You are about to drop the column `requestedById` on the `Payment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_requestedById_fkey";

-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "revision" TEXT;

-- AlterTable
ALTER TABLE "Milestone" ADD COLUMN     "revision" TEXT;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "requestedById",
ADD COLUMN     "approvedDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Stage" ADD COLUMN     "paymentId" TEXT;

-- RenameForeignKey
ALTER TABLE "Payment" RENAME CONSTRAINT "Payment_assigneeId_fkey" TO "Payment_reviewedById_fkey";

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
