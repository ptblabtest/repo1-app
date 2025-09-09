/*
  Warnings:

  - You are about to drop the column `taskId` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Milestone` table. All the data in the column will be lost.
  - You are about to drop the column `finishedDate` on the `Milestone` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Milestone` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `Opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `finishedDate` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `metrics` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Budget" DROP CONSTRAINT "Budget_taskId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Project" DROP CONSTRAINT "Project_contractId_fkey";

-- AlterTable
ALTER TABLE "public"."Budget" DROP COLUMN "taskId";

-- AlterTable
ALTER TABLE "public"."Milestone" DROP COLUMN "endDate",
DROP COLUMN "finishedDate",
DROP COLUMN "startDate",
ADD COLUMN     "actualEndDate" TIMESTAMP(3),
ADD COLUMN     "actualStartDate" TIMESTAMP(3),
ADD COLUMN     "plannedEndDate" TIMESTAMP(3),
ADD COLUMN     "plannedStartDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Opportunity" DROP COLUMN "company";

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "finishedDate",
ADD COLUMN     "actualEndDate" TIMESTAMP(3),
ADD COLUMN     "actualStartDate" TIMESTAMP(3),
ADD COLUMN     "plannedEndDate" TIMESTAMP(3),
ADD COLUMN     "plannedStartDate" TIMESTAMP(3),
ALTER COLUMN "contractId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Quote" DROP COLUMN "company";

-- AlterTable
ALTER TABLE "public"."Task" DROP COLUMN "metrics";

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "public"."Contract"("id") ON DELETE SET NULL ON UPDATE CASCADE;
