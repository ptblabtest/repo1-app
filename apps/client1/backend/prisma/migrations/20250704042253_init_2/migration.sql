/*
  Warnings:

  - You are about to drop the column `plannedPaymentDate` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Fund` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Fund" DROP CONSTRAINT "Fund_projectId_fkey";

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "plannedPaymentDate",
DROP COLUMN "projectId",
ADD COLUMN     "taskId" TEXT;

-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "taskId" TEXT;

-- AlterTable
ALTER TABLE "Fund" DROP COLUMN "projectId",
ADD COLUMN     "plannedPaymentDate" TIMESTAMP(3),
ADD COLUMN     "taskId" TEXT;

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fund" ADD CONSTRAINT "Fund_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
