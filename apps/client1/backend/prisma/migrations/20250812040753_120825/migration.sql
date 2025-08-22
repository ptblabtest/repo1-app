/*
  Warnings:

  - You are about to drop the `_Member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_Member" DROP CONSTRAINT "_Member_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_Member" DROP CONSTRAINT "_Member_B_fkey";

-- DropTable
DROP TABLE "public"."_Member";

-- CreateTable
CREATE TABLE "public"."_ProjectMember" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectMember_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_TaskMember" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TaskMember_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectMember_B_index" ON "public"."_ProjectMember"("B");

-- CreateIndex
CREATE INDEX "_TaskMember_B_index" ON "public"."_TaskMember"("B");

-- AddForeignKey
ALTER TABLE "public"."_ProjectMember" ADD CONSTRAINT "_ProjectMember_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProjectMember" ADD CONSTRAINT "_ProjectMember_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_TaskMember" ADD CONSTRAINT "_TaskMember_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_TaskMember" ADD CONSTRAINT "_TaskMember_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
