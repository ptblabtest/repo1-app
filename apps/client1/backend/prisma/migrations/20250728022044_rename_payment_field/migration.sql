-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "regNumber" TEXT;

ALTER TABLE "Payment" RENAME COLUMN "assigneeId" TO "reviewedById";