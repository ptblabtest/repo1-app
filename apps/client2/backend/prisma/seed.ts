import { PrismaClient } from "../generated/prisma";
import { seedOrganizations, seedRoles, seedUsers } from "./seeds/userTrials";

const prisma = new PrismaClient();

async function main() {
  const seeds = [
    { name: "Role", fn: () => seedRoles(prisma) },
    { name: "Organization", fn: () => seedOrganizations(prisma) },
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
