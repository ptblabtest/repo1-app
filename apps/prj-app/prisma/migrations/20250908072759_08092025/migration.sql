/*
  Warnings:

  - You are about to drop the column `productId` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Quote` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Contract" DROP CONSTRAINT "Contract_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Opportunity" DROP CONSTRAINT "Opportunity_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Quote" DROP CONSTRAINT "Quote_productId_fkey";

-- AlterTable
ALTER TABLE "public"."Contract" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "public"."Opportunity" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "public"."Quote" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "public"."_OpportunityToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_OpportunityToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ContractToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ContractToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ProductToQuote" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProductToQuote_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_OpportunityToProduct_B_index" ON "public"."_OpportunityToProduct"("B");

-- CreateIndex
CREATE INDEX "_ContractToProduct_B_index" ON "public"."_ContractToProduct"("B");

-- CreateIndex
CREATE INDEX "_ProductToQuote_B_index" ON "public"."_ProductToQuote"("B");

-- AddForeignKey
ALTER TABLE "public"."_OpportunityToProduct" ADD CONSTRAINT "_OpportunityToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Opportunity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_OpportunityToProduct" ADD CONSTRAINT "_OpportunityToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContractToProduct" ADD CONSTRAINT "_ContractToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContractToProduct" ADD CONSTRAINT "_ContractToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProductToQuote" ADD CONSTRAINT "_ProductToQuote_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProductToQuote" ADD CONSTRAINT "_ProductToQuote_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Quote"("id") ON DELETE CASCADE ON UPDATE CASCADE;
