-- CreateTable
CREATE TABLE "public"."_PipelineMembers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PipelineMembers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PipelineMembers_B_index" ON "public"."_PipelineMembers"("B");

-- AddForeignKey
ALTER TABLE "public"."_PipelineMembers" ADD CONSTRAINT "_PipelineMembers_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Pipeline"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PipelineMembers" ADD CONSTRAINT "_PipelineMembers_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
