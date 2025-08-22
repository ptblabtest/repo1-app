export async function seedCostType(prisma: any) {
  try {
    // Check if any cost types exist
    const existingCostTypesCount = await prisma.costType.count();

    if (existingCostTypesCount === 0) {
      // No cost types - truncate for clean state
      await prisma.costType.deleteMany();
      console.log("Truncated CostType table");
    } else {
      console.log(
        `Found ${existingCostTypesCount} existing cost types. Adding missing cost types only...`
      );
    }

    const costTypesToSeed = [
      { name: "HOK (Carbon)" },
      { name: "HOK (Biodiv)" },
      { name: "HOK (Suporting)" },
      { name: "First Aid" },
      { name: "Meals Expense" },
      { name: "Transportation Expense (Mobil)" },
      { name: "Transportation Expense (Motor)" },
      { name: "Transportation Expense (Bus)" },
      { name: "Airport Transportation" },
      { name: "Flight Expenses (National)" },
      { name: "Over Baggage" },
      { name: "DSA Expense" },
      { name: "Accomodation Expense (Hotel)" },
      { name: "Accomodation Expense (Local)" },
      { name: "Project Supplies Expense" },
      { name: "Asset Project" },
      { name: "FGD Reguler (perorangan)" },
      { name: "FGD Small Group (per hari)" },
      { name: "Transportasi FGD" },
      { name: "Botanis" },
      { name: "Ornitologist" },
      { name: "Mammalogist" },
      { name: "Herpetologist" },
      { name: "Insurance" },
      { name: "Expert" },
    ];

    let createdCount = 0;
    let skippedCount = 0;

    for (const costTypeData of costTypesToSeed) {
      const existingCostType = await prisma.costType.findFirst({
        where: { name: costTypeData.name },
      });

      if (existingCostType) {
        console.log(` ⏭️ Cost type already exists: ${costTypeData.name}`);
        skippedCount++;
      } else {
        await prisma.costType.create({
          data: costTypeData,
        });
        console.log(` ✅ Created cost type: ${costTypeData.name}`);
        createdCount++;
      }
    }

    console.log(
      `Seeded cost types: ${createdCount} created, ${skippedCount} skipped`
    );
  } catch (error) {
    console.error("Error seeding cost types:", error);
  }
}
