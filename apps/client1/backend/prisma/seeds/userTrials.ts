import argon2 from "argon2";

export async function seedUsers(prisma: any) {
  try {
    // Check if any users exist
    const existingUsersCount = await prisma.user.count();
    
    if (existingUsersCount === 0) {
      // No users - truncate for clean state
      await prisma.user.deleteMany();
      console.log("Truncated User table");
    } else {
      console.log(`Found ${existingUsersCount} existing users. Adding missing users only...`);
    }
    
    const hashedPassword = await argon2.hash("12345678");
    
    const usersToSeed = [
      {
        name: "admin",
        email: "admin@test.com",
        password: await argon2.hash("P@ssw0rd"),
      },
      {
        name: "user1",
        email: "user1@test.com",
        password: hashedPassword,
      },
      {
        name: "user2",
        email: "user2@test.com",
        password: hashedPassword,
      },
      {
        name: "user3",
        email: "user3@test.com",
        password: hashedPassword,
      },
    ];
    
    let createdCount = 0;
    let skippedCount = 0;
    
    for (const userData of usersToSeed) {
      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email },
      });
      
      if (existingUser) {
        console.log(`  ⏭️  User already exists: ${userData.email}`);
        skippedCount++;
      } else {
        await prisma.user.create({
          data: userData,
        });
        console.log(`  ✅ Created user: ${userData.email}`);
        createdCount++;
      }
    }
    
    console.log(`Seeded users: ${createdCount} created, ${skippedCount} skipped`);
    
  } catch (error) {
    console.error("Error seeding users:", error);
  }
}