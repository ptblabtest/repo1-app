export async function seedReportCategories(prisma: any) {
  try {
    const existingCategoriesCount = await prisma.reportCategory.count();
    if (existingCategoriesCount === 0) {
      console.log("ReportCategory table is empty. Proceeding with initial seed...");
    } else {
      console.log(
        `Found ${existingCategoriesCount} existing categories. Adding missing ones only...`
      );
    }

    // Get superadmin user for createdBy and updatedBy
    const superadmin = await prisma.user.findFirst({
      where: { username: "superadmin" }
    });

    if (!superadmin) {
      console.log(" ⚠️ Superadmin not found. Categories will be created without user reference.");
    }

    // Define hierarchical structure
    const categoriesToSeed = [
      // Finance hierarchy
      {
        name: "Finance",
        code: "FIN",
        children: [
          {
            name: "Finance Report",
            code: "FIN_REPORT",
            children: [
              { name: "Laba Rugi", code: "FIN_REPORT_LABARUGI" },
              { name: "Neraca", code: "FIN_REPORT_NERACA" },
              { name: "Arus Kas", code: "FIN_REPORT_ARUSKAS" },
              { name: "Bank Statement", code: "FIN_REPORT_BANKSTMT" }
            ]
          },
          {
            name: "Console Report",
            code: "FIN_CONSOLE",
            children: []
          }
        ]
      },
      // Collection hierarchy
      {
        name: "Collection",
        code: "COLL",
        children: [
          {
            name: "Coll Report",
            code: "COLL_REPORT",
            children: [
              { name: "Tutup Buku Coll", code: "COLL_REPORT_TUTUPBUKU" },
              { name: "Pencapaian Coll", code: "COLL_REPORT_PENCAPAIAN" },
              { name: "Tarik Barang", code: "COLL_REPORT_TARIKBARANG" },
              { name: "Pemakaian Coll", code: "COLL_REPORT_PEMAKAIANCOLL" },
              { name: "Pemakaian Coor", code: "COLL_REPORT_PEMAKAIANCOOR" }
            ]
          },
          {
            name: "Console Report",
            code: "COLL_CONSOLE",
            children: []
          }
        ]
      },
      // HRD hierarchy
      {
        name: "HRD",
        code: "HRD",
        children: [
          {
            name: "HR Report",
            code: "HRD_REPORT",
            children: [
              { name: "Gaji & Tunjangan", code: "HRD_REPORT_GAJITUNJANGAN" },
              { name: "Komisi & Bonus", code: "HRD_REPORT_KOMISIBONUS" },
              { name: "BPJS", code: "HRD_REPORT_BPJS" },
              { name: "PPh 21", code: "HRD_REPORT_PPH21" },
              { name: "Bukti Transfer", code: "HRD_REPORT_BUKTITRANSFER" }
            ]
          },
          {
            name: "Console Report",
            code: "HRD_CONSOLE",
            children: []
          }
        ]
      }
    ];

    let createdCount = 0;
    let skippedCount = 0;

    // Recursive function to create categories
    async function createCategoryWithChildren(categoryData: any, parentId: string | null = null) {
      const existing = await prisma.reportCategory.findUnique({
        where: { code: categoryData.code }
      });

      if (existing) {
        console.log(` ⏭️ Category already exists: ${categoryData.name}`);
        skippedCount++;
        return existing.id;
      }

      const created = await prisma.reportCategory.create({
        data: {
          name: categoryData.name,
          code: categoryData.code,
          parentId: parentId,
          createdById: superadmin?.id || null,
          updatedById: superadmin?.id || null
        }
      });
      console.log(` ✅ Created category: ${categoryData.name}`);
      createdCount++;

      // Create children if any
      if (categoryData.children && categoryData.children.length > 0) {
        for (const child of categoryData.children) {
          await createCategoryWithChildren(child, created.id);
        }
      }

      return created.id;
    }

    // Process each top-level category
    for (const category of categoriesToSeed) {
      await createCategoryWithChildren(category);
    }

    console.log(
      `Seeded report categories: ${createdCount} created, ${skippedCount} skipped`
    );
  } catch (error) {
    console.error("Error seeding report categories:", error);
  }
}

export async function seedPermissions(prisma: any) {
  try {
    const existingPermissionsCount = await prisma.permission.count();
    if (existingPermissionsCount === 0) {
      console.log("Permission table is empty. Proceeding with initial seed...");
    } else {
      console.log(
        `Found ${existingPermissionsCount} existing permissions. Adding missing ones only...`
      );
    }

    // Get superadmin user for createdBy and updatedBy
    const superadmin = await prisma.user.findFirst({
      where: { username: "superadmin" }
    });

    if (!superadmin) {
      console.log(" ⚠️ Superadmin not found. Permissions will be created without user reference.");
    }

    // Get all report categories
    const categories = await prisma.reportCategory.findMany({
      select: {
        id: true,
        name: true,
        code: true
      }
    });

    if (categories.length === 0) {
      console.log(" ⚠️ No report categories found. Please seed ReportCategories first.");
      return;
    }

    const actions = ["create", "read", "update", "delete"];
    let createdCount = 0;
    let skippedCount = 0;

    for (const category of categories) {
      const resource = `report.${category.code.toLowerCase()}`;
      
      for (const action of actions) {
        const permissionName = `${resource}.${action}`;
        
        const existingPermission = await prisma.permission.findUnique({
          where: {
            resource_action: {
              resource: resource,
              action: action
            }
          }
        });

        if (existingPermission) {
          console.log(` ⏭️ Permission already exists: ${permissionName}`);
          skippedCount++;
        } else {
          await prisma.permission.create({
            data: {
              name: permissionName,
              resource: resource,
              action: action,
              description: `${action.charAt(0).toUpperCase() + action.slice(1)} ${category.name}`,
              createdById: superadmin?.id || null,
              updatedById: superadmin?.id || null
            }
          });
          console.log(` ✅ Created permission: ${permissionName}`);
          createdCount++;
        }
      }
    }

    console.log(
      `Seeded permissions: ${createdCount} created, ${skippedCount} skipped`
    );
  } catch (error) {
    console.error("Error seeding permissions:", error);
  }
}