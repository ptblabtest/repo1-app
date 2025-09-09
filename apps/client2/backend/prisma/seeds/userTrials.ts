import argon2 from "argon2";

export async function seedOrganizations(prisma: any) {
  try {
    const existingOrgsCount = await prisma.organization.count();
    if (existingOrgsCount === 0) {
      console.log("Organization table is empty. Proceeding with initial seed...");
    } else {
      console.log(
        `Found ${existingOrgsCount} existing organizations. Adding missing ones only...`
      );
    }

    const organizationsToSeed = [
      { name: "ORG1", code: "ORG001" },
      { name: "ORG2", code: "ORG002" },
      { name: "ORG3", code: "ORG003" },
      { name: "ORG4", code: "ORG004" },
      { name: "ORG5", code: "ORG005" },
    ];

    let createdCount = 0;
    let skippedCount = 0;

    for (const orgData of organizationsToSeed) {
      const existingOrg = await prisma.organization.findFirst({
        where: {
          OR: [
            { name: orgData.name },
            { code: orgData.code }
          ]
        },
      });

      if (existingOrg) {
        console.log(` ⏭️ Organization already exists: ${orgData.name}`);
        skippedCount++;
      } else {
        await prisma.organization.create({
          data: orgData,
        });
        console.log(` ✅ Created organization: ${orgData.name}`);
        createdCount++;
      }
    }

    console.log(
      `Seeded organizations: ${createdCount} created, ${skippedCount} skipped`
    );
  } catch (error) {
    console.error("Error seeding organizations:", error);
  }
}

export async function seedRoles(prisma: any) {
  try {
    const existingRolesCount = await prisma.role.count();
    if (existingRolesCount === 0) {
      console.log("Role table is empty. Proceeding with initial seed...");
    } else {
      console.log(
        `Found ${existingRolesCount} existing roles. Adding missing ones only...`
      );
    }

    const rolesToSeed = [
      { name: "superadmin", level: 1 },
      { name: "leader", level: 2 },
      { name: "user", level: 3 },
      { name: "visitor", level: 4 },
    ];

    let createdCount = 0;
    let skippedCount = 0;

    for (const roleData of rolesToSeed) {
      const existingRole = await prisma.role.findUnique({
        where: { name: roleData.name },
      });

      if (existingRole) {
        console.log(` ⏭️ Role already exists: ${roleData.name}`);
        skippedCount++;
      } else {
        await prisma.role.create({
          data: roleData,
        });
        console.log(` ✅ Created role: ${roleData.name}`);
        createdCount++;
      }
    }

    console.log(
      `Seeded roles: ${createdCount} created, ${skippedCount} skipped`
    );
  } catch (error) {
    console.error("Error seeding roles:", error);
  }
}

export async function seedUsers(prisma: any) {
  try {
    // Check if any users exist
    const existingUsersCount = await prisma.user.count();
    if (existingUsersCount === 0) {
      console.log("User table is empty. Proceeding with initial seed...");
    } else {
      console.log(
        `Found ${existingUsersCount} existing users. Adding missing users only...`
      );
    }

    const hashedPassword = await argon2.hash("12345678");
    
    const usersToSeed = [
      {
        username: "superadmin",
        password: await argon2.hash("P@ssw0rd"),
        roleName: "superadmin",
        orgCode: "ORG001"
      },
    ];

    let createdCount = 0;
    let skippedCount = 0;

    for (const userData of usersToSeed) {
      const existingUser = await prisma.user.findUnique({
        where: { username: userData.username },
      });

      if (existingUser) {
        console.log(` ⏭️ User already exists: ${userData.username}`);
        skippedCount++;
      } else {
        // Find role and organization
        const role = await prisma.role.findUnique({
          where: { name: userData.roleName }
        });
        
        const organization = await prisma.organization.findUnique({
          where: { code: userData.orgCode }
        });

        if (!role || !organization) {
          console.log(` ❌ Skipping ${userData.username}: Role or Organization not found`);
          continue;
        }

        await prisma.user.create({
          data: {
            username: userData.username,
            password: userData.password,
            roleId: role.id,
            organizationId: organization.id
          },
        });
        console.log(` ✅ Created user: ${userData.username}`);
        createdCount++;
      }
    }

    console.log(
      `Seeded users: ${createdCount} created, ${skippedCount} skipped`
    );
  } catch (error) {
    console.error("Error seeding users:", error);
  }
}