/*
  Warnings:

  - You are about to drop the column `accountId` on the `CostType` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."CostType" DROP COLUMN "accountId",
ADD COLUMN     "parentId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."CostType" ADD CONSTRAINT "CostType_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."CostType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
