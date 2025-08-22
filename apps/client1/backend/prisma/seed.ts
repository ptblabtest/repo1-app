import { PrismaClient } from "../generated/prisma";
import { seedCostType } from "./seeds/costType";
import { seedCategories } from "./seeds/categories";
import { seedCountries } from "./seeds/countries";
import { seedProducts } from "./seeds/products";
import { seedStageType } from "./seeds/stageType";
import { seedUsers } from "./seeds/userTrials";

const prisma = new PrismaClient();

async function main() {
  const seeds = [
    { name: "CostType", fn: () => seedCostType(prisma) },
    { name: "Categories", fn: () => seedCategories(prisma) },
    { name: "Countries", fn: () => seedCountries(prisma) },
    { name: "Products", fn: () => seedProducts(prisma) },
    { name: "StageType", fn: () => seedStageType(prisma) },
    { name: "Users", fn: () => seedUsers(prisma) },
  ];

  for (const { name, fn } of seeds) {
    try {
      console.log(`Seeding ${name}...`);
      await fn();
      console.log(`✅ ${name} seeded successfully.`);
    } catch (err) {
      console.error(`❌ Failed to seed ${name}:`, err);
    }
  }

  await prisma.$disconnect();
}

main();
