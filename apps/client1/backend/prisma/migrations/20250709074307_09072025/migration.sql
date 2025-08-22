/*
  Warnings:

  - You are about to drop the column `taskId` on the `Event` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_taskId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "taskId";

-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "paymentId" TEXT;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
