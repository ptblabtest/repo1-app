export async function seedStageType(prisma: any) {
  try {
    // Check if any stage types exist
    const existingStageTypesCount = await prisma.stageType.count();

    if (existingStageTypesCount === 0) {
      // No stage types - truncate for clean state
      await prisma.stageType.deleteMany();
      console.log("Truncated StageType table");
    } else {
      console.log(
        `Found ${existingStageTypesCount} existing stage types. Adding missing stage types only...`
      );
    }

    const stageProcessData = {
      activity: [
        { order: "1", value: "In Progress", label: "In Progress" },
        { order: "2", value: "Done", label: "Done" },
        { order: "0", value: "Overdue", label: "Overdue" },
      ],
      fund: [
        { order: "1", value: "Review", label: "Review" },
        { order: "2", value: "Approved", label: "Approved" },
        { order: "3", value: "Payment Completed", label: "Payment Completed" },
        {
          order: "4",
          value: "Pending Settlement",
          label: "Pending Settlement",
        },
        {
          order: "5",
          value: "Settlement Completed",
          label: "Settlement Completed",
        },
        { order: "0", value: "Rejected", label: "Rejected" },
      ],
      budget: [
        { order: "1", value: "Draft", label: "Draft" },
        { order: "2", value: "Review", label: "Review" },
        { order: "3", value: "Approved", label: "Approved" },
      ],
      contract: [
        { order: "1", value: "Preparation", label: "Preparation" },
        { order: "2", value: "Submission", label: "Submission" },
        { order: "3", value: "Legal Review", label: "Legal Review" },
        { order: "4", value: "Contract Signed", label: "Contract Signed" },
        { order: "0", value: "Cancelled", label: "Cancelled" },
      ],
      lead: [
        { order: "1", value: "Interested", label: "Interested" },
        { order: "2", value: "Engaged", label: "Engaged" },
        { order: "3", value: "Approved", label: "Approved" },
        { order: "0", value: "No Response", label: "No Response" },
        { order: "0", value: "Not Qualified", label: "Not Qualified" },
        { order: "0", value: "Rejected", label: "Rejected" },
      ],
      milestone: [
        { order: "1", value: "Draft", label: "Draft" },
        { order: "2", value: "Approved", label: "Approved" },
        { order: "3", value: "In Progress", label: "In Progress" },
        { order: "4", value: "Done", label: "Done" },
        { order: "5", value: "Invoicing", label: "Invoicing" },
        { order: "6", value: "Paid", label: "Paid" },
        { order: "0", value: "Cancelled", label: "Cancelled" },
      ],
      opportunity: [
        {
          order: "1",
          value: "Introductory Meeting",
          label: "Introductory Meeting",
        },
        { order: "2", value: "NDA Due Diligence", label: "NDA Due Diligence" },
        { order: "3", value: "Due Diligence", label: "Due Diligence" },
        { order: "4", value: "Approved", label: "Approved" },
        { order: "0", value: "No Response", label: "No Response" },
        { order: "0", value: "Not Qualified", label: "Not Qualified" },
        { order: "0", value: "Rejected", label: "Rejected" },
      ],
      project: [
        { order: "1", value: "In Progress", label: "In Progress" },
        { order: "2", value: "Done", label: "Done" },
        { order: "0", value: "Overdue", label: "Overdue" },
      ],
      quote: [
        { order: "1", value: "Preparation", label: "Preparation" },
        { order: "2", value: "Quote Released", label: "Quote Released" },
        { order: "3", value: "Under Review", label: "Under Review" },
        { order: "4", value: "Approved", label: "Approved" },
        { order: "0", value: "Quote Expired", label: "Quote Expired" },
        { order: "0", value: "Not Qualified", label: "Not Qualified" },
        { order: "0", value: "Rejected", label: "Rejected" },
      ],
      receivable: [
        { order: "1", value: "Invoice Released", label: "Invoice Released" },
        { order: "2", value: "Invoice Sent", label: "Invoice Sent" },
        { order: "3", value: "Pending Document", label: "Pending Document" },
        { order: "4", value: "Fully Paid", label: "Fully Paid" },
      ],
      task: [
        { order: "1", value: "In Progress", label: "In Progress" },
        { order: "2", value: "Done", label: "Done" },
        { order: "0", value: "Overdue", label: "Overdue" },
      ],
    };

    let createdCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;

    // Process each model
    for (const [model, stages] of Object.entries(stageProcessData)) {
      console.log(`Processing model: ${model}`);

      for (const stage of stages as any[]) {
        // Check using composite unique key (model + value combination)
        const existingStage = await prisma.stageType.findFirst({
          where: {
            model: model,
            value: stage.value,
          },
        });

        if (existingStage) {
          // Update only if order has changed
          if (existingStage.order !== stage.order) {
            await prisma.stageType.update({
              where: {
                id: existingStage.id,
              },
              data: {
                order: stage.order,
              },
            });
            console.log(
              `  🔄 Updated order for: ${model} - ${stage.value} (${existingStage.order} → ${stage.order})`
            );
            updatedCount++;
          } else {
            console.log(
              `  ⏭️  Stage type unchanged: ${model} - ${stage.value}`
            );
            skippedCount++;
          }
        } else {
          await prisma.stageType.create({
            data: {
              model: model,
              order: stage.order,
              value: stage.value,
              label: stage.label,
            },
          });
          console.log(`  ✅ Created stage type: ${model} - ${stage.value}`);
          createdCount++;
        }
      }
    }

    console.log(
      `Seeded stage types: ${createdCount} created, ${updatedCount} updated, ${skippedCount} unchanged`
    );
  } catch (error) {
    console.error("Error seeding stage types:", error);
  }
}
