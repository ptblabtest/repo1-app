/*
  Warnings:

  - You are about to drop the column `assigneeId` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `revision` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `contractId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `leadId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `opportunityId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `quoteId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `assigneeId` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `contractId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `leadId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `opportunityId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `quoteId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `assigneeId` on the `Opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `Opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `assigneeId` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `contractId` on the `Stage` table. All the data in the column will be lost.
  - You are about to drop the column `leadId` on the `Stage` table. All the data in the column will be lost.
  - You are about to drop the column `opportunityId` on the `Stage` table. All the data in the column will be lost.
  - You are about to drop the column `quoteId` on the `Stage` table. All the data in the column will be lost.
  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Activity" DROP CONSTRAINT "Activity_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Activity" DROP CONSTRAINT "Activity_taskId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Activity" DROP CONSTRAINT "Activity_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Contract" DROP CONSTRAINT "Contract_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Contract" DROP CONSTRAINT "Contract_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Contract" DROP CONSTRAINT "Contract_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_contractId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_leadId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_opportunityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_quoteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Lead" DROP CONSTRAINT "Lead_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Lead" DROP CONSTRAINT "Lead_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Lead" DROP CONSTRAINT "Lead_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Note" DROP CONSTRAINT "Note_contractId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Note" DROP CONSTRAINT "Note_leadId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Note" DROP CONSTRAINT "Note_opportunityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Note" DROP CONSTRAINT "Note_quoteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Opportunity" DROP CONSTRAINT "Opportunity_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Opportunity" DROP CONSTRAINT "Opportunity_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Opportunity" DROP CONSTRAINT "Opportunity_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Quote" DROP CONSTRAINT "Quote_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Quote" DROP CONSTRAINT "Quote_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Quote" DROP CONSTRAINT "Quote_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Stage" DROP CONSTRAINT "Stage_contractId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Stage" DROP CONSTRAINT "Stage_leadId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Stage" DROP CONSTRAINT "Stage_opportunityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Stage" DROP CONSTRAINT "Stage_quoteId_fkey";

-- AlterTable
ALTER TABLE "public"."Contract" DROP COLUMN "assigneeId",
DROP COLUMN "createdById",
DROP COLUMN "revision",
DROP COLUMN "updatedById";

-- AlterTable
ALTER TABLE "public"."Event" DROP COLUMN "contractId",
DROP COLUMN "leadId",
DROP COLUMN "opportunityId",
DROP COLUMN "quoteId",
ADD COLUMN     "pipelineId" TEXT;

-- AlterTable
ALTER TABLE "public"."Lead" DROP COLUMN "assigneeId",
DROP COLUMN "createdById",
DROP COLUMN "updatedById";

-- AlterTable
ALTER TABLE "public"."Note" DROP COLUMN "contractId",
DROP COLUMN "leadId",
DROP COLUMN "opportunityId",
DROP COLUMN "quoteId",
ADD COLUMN     "pipelineId" TEXT;

-- AlterTable
ALTER TABLE "public"."Opportunity" DROP COLUMN "assigneeId",
DROP COLUMN "createdById",
DROP COLUMN "updatedById";

-- AlterTable
ALTER TABLE "public"."Quote" DROP COLUMN "assigneeId",
DROP COLUMN "createdById",
DROP COLUMN "updatedById";

-- AlterTable
ALTER TABLE "public"."Stage" DROP COLUMN "contractId",
DROP COLUMN "leadId",
DROP COLUMN "opportunityId",
DROP COLUMN "quoteId",
ADD COLUMN     "pipelineId" TEXT;

-- DropTable
DROP TABLE "public"."Activity";

-- CreateTable
CREATE TABLE "public"."Pipeline" (
    "id" TEXT NOT NULL,
    "category" TEXT,
    "leadId" TEXT,
    "opportunityId" TEXT,
    "quoteId" TEXT,
    "contractId" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "assigneeId" TEXT,
    "createdById" TEXT,
    "updatedById" TEXT,

    CONSTRAINT "Pipeline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Pipeline" ADD CONSTRAINT "Pipeline_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."Lead"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pipeline" ADD CONSTRAINT "Pipeline_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "public"."Opportunity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pipeline" ADD CONSTRAINT "Pipeline_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "public"."Quote"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pipeline" ADD CONSTRAINT "Pipeline_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "public"."Contract"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pipeline" ADD CONSTRAINT "Pipeline_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pipeline" ADD CONSTRAINT "Pipeline_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pipeline" ADD CONSTRAINT "Pipeline_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_pipelineId_fkey" FOREIGN KEY ("pipelineId") REFERENCES "public"."Pipeline"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Note" ADD CONSTRAINT "Note_pipelineId_fkey" FOREIGN KEY ("pipelineId") REFERENCES "public"."Pipeline"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Stage" ADD CONSTRAINT "Stage_pipelineId_fkey" FOREIGN KEY ("pipelineId") REFERENCES "public"."Pipeline"("id") ON DELETE SET NULL ON UPDATE CASCADE;
