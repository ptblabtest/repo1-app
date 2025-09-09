const { PrismaClient } = require('@generated/prisma');

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

export default prisma;